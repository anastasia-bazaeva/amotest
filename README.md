# Работа с версткой по макету WELBEX

## [ССЫЛКА НА ДЕМО](https://amotest.vercel.app/)

### Работа выполнена на базе: 
- Vite
- React
- Typescrypt
- React Router

#### Описание
- Проект представляет собой одностраничный документ, однако в нем уже на этапе макета размещено множество ссылок в header и footer, поэтому закладываю возможность перемещения по ссылкам. Для этого к проекту подключен роутер, главная страница вызывается по корневому роуту. В проекте также есть специальный layout, который позволит отрендерить другие страницы, которые возможны при расширении функционала, внутри блока main, оставляя неизменными header и footer;
- В проекте есть кастомная страница 404 для несуществующего роута (работает при локальной сборке, в ссылке на демо нет маршрутизации по неописанным в проекте роутам);
- Также в текущем макете не предусмотрено большого разнообразия кнопок, кроме одной, но учитывая множество заложенных, но отстутсвующих в макете роутов, элемент кнопки закладываю переиспользуемым для разных целей с различными типами - button, submit, reset;
- Декоративные элементы в виде шаров решены с помощью css;
- Переиспользуемые компоненты вынесены в отдельные файлы;
- Названия и адреса ссылок, а также иконки экспортируются в компоненты из отдельного файла, и при возможном изменении макета их можно будет поменять в одном месте, а не искать эти данные внутри компонентов;

