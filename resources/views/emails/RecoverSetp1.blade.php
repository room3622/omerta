IP {{$ip}} pediu o email,<br/><br/>
Ir para <a href="http://{{ env('APP_URL') }}/?module=Homepage.Login&action=RecoverPassword&id={{$token}}">http://{{ env('APP_URL') }}/?module=Homepage.Login&action=RecoverPassword&id={{$token}}</a><br/><br/>
Se clicares aqui, uma nova password será gerada e enviada para o teu email
