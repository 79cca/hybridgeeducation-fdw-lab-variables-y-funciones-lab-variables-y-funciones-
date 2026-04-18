from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

from utils.sanitizar import sanitizar_texto
from funciones_agentes.obtener_clima import obtener_clima
from funciones_agentes.obtener_precio_accion import obtener_precio_accion


def detectar_intencion(texto):
    if "clima" in texto or "temperatura" in texto:
        return "clima"
    elif "accion" in texto or "precio" in texto or "valor" in texto:
        return "accion"
    else:
        return "desconocido"


def main():
    print("🤖 Chatbot iniciado")
    print("Puedes preguntar por clima o precio de acciones")
    print("Escribe 'salir' para terminar")

    options = webdriver.ChromeOptions()
    # options.add_argument("--headless")  # descomenta si no quieres ver Chrome

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    try:
        while True:
            user_input = input("\nTú: ")

            if user_input.lower() == "salir":
                print("Chatbot: Adiós 👋")
                break

            texto = sanitizar_texto(user_input)
            intencion = detectar_intencion(texto)

            if intencion == "clima":
                resultado = obtener_clima(driver, texto)
            elif intencion == "accion":
                resultado = obtener_precio_accion(driver, texto)
            else:
                resultado = "No entendí tu solicitud"

            print("Chatbot:", resultado)

    finally:
        driver.quit()


if __name__ == "__main__":
    main()