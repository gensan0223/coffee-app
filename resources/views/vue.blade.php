<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <body>
        <div id="counter">
            カウントアップ: @{{ counter }}
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>