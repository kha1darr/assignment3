const url = 'https://api.adviceslip.com/advice';

        // Функция для получения случайного совета
        async function getRandomAdvice() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const advice = data.slip.advice;

                const adviceContainer = document.getElementById('advice-container');
                adviceContainer.textContent = `Advice: ${advice}`;
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        }

        // Вызов функции при загрузке страницы и при каждом DOMContentLoaded
        document.addEventListener('DOMContentLoaded', getRandomAdvice);