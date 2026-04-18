from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def obtener_precio_accion(driver, consulta):
    driver.get(f"https://www.google.com/search?q=precio+accion+{consulta}")

    try:
        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.ID, "search"))
        )

        titulos = driver.find_elements(By.TAG_NAME, "h3")

        resultados = []
        for titulo in titulos[:5]:
            texto = titulo.text.strip()
            if texto:
                resultados.append(texto)

        if resultados:
            return "Resultados encontrados: " + " | ".join(resultados)
        return "No encontré resultados visibles para esa acción."

    except Exception as e:
        return f"No se pudo obtener el precio de la acción. Error real: {type(e).__name__}: {e}"