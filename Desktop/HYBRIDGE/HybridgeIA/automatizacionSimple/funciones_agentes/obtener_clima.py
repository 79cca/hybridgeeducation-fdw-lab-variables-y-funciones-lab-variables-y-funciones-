import requests

def obtener_clima(driver, consulta):
    try:
        texto = consulta.lower()
        ciudad = texto.replace("clima", "").replace("temperatura", "").strip()

        # quitar "en " al inicio
        if ciudad.startswith("en "):
            ciudad = ciudad[3:].strip()

        if not ciudad:
            return "Indica una ciudad. Ejemplo: clima guadalajara"

        geo_url = "https://geocoding-api.open-meteo.com/v1/search"
        geo_params = {
            "name": ciudad,
            "count": 1,
            "language": "es",
            "format": "json"
        }

        geo_resp = requests.get(geo_url, params=geo_params, timeout=10)
        geo_data = geo_resp.json()

        if "results" not in geo_data or not geo_data["results"]:
            return "No encontré esa ciudad."

        lugar = geo_data["results"][0]
        lat = lugar["latitude"]
        lon = lugar["longitude"]
        nombre = lugar["name"]
        pais = lugar.get("country", "")

        clima_url = "https://api.open-meteo.com/v1/forecast"
        clima_params = {
            "latitude": lat,
            "longitude": lon,
            "current": "temperature_2m,wind_speed_10m",
            "timezone": "auto"
        }

        clima_resp = requests.get(clima_url, params=clima_params, timeout=10)
        clima_data = clima_resp.json()

        actual = clima_data["current"]

        return f"Clima en {nombre}, {pais}: {actual['temperature_2m']}°C, viento {actual['wind_speed_10m']} km/h"

    except Exception:
        return "No se pudo obtener el clima en este momento."