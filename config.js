const TOKEN = "27af95080ac5c59332110320b403c80373830c477d6d8373822513ecd32a8917f5edffa51e03b0e63a1ed"; // Токен группы, в которой будет стоять бот
const GROUP_ID = 202437482 // Айди группы, в которой будет стоять бот
const BTN_TEXT = ["vto.pe", "vkbot.ru", "vkbot.ru"];
const TIME = 500;
const CHAT_SPAM = ["�1�7�1�7�1�7�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�0�4�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�0�2�0�1�0�1�9�9�0�1�0�1�0�1�7�2�0�7�7�2�0�7�7�2�0�1�9�9�0�1�9�9�0�1�7�2�0�1�7�2�0�1�0�1�0�1�7�2�0�1�0�1�0�1�7�2�0�1�0�1�0�1�0�1�7�2�0�1�0�1�0�1�0�1�7�2�9�2�9�2�9�9�9�8�9�9�9�8�9�5�9�5�9�5�0�9�9�5�0�9�9�5�9�5�0�9�0�1�7�2�7�2�0�9�9�9�9�6�9�6�0�9�9�8�7�2",
"����ڧ�ѕ0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�0�4�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6",
"�1�7�1�7�1�7�1�7�1�7�1�7����ӧ���1�7�1�7�1�7�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1",
"���է� ���ѧ��ە0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�0�4�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6",
"���ާ��9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�0�4�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6",
"���ѧ�ѧ��0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�7�2�0�2�0�5�9�1�9�6�9�3�9�2�0�5�0�5�9�0�7�6�0�9�9�9�9�5�9�8�9�9�9�0�9�8�9�1�9�4�9�6�9�9�9�7�9�5�9�3�9�0�9�3�9�2�9�2�9�4�9�4�9�8�9�5�9�2�9�8�9�5�9�4�9�1�9�0�9�2�7�3�9�9�9�8�9�7�7�0�9�1�9�9�7�9�7�8�9�2�0�1�0�2�9�9�0�5�0�1�7�2�0�9�9�0�0�1�9�2�9�8�7�4�7�4�9�1�9�4�0�8�7�9�7�0�9�3�9�6�9�7�9�8�6�6�9�3�9�2�9�9�9�0�9�2�9�9�9�8�9�3�9�3�9�4�9�6�9�5�8�9�9�6�9�2�0�5�9�1�6�9�9�6�1�5�9�3�6�9��1�5�9�6�9�7�9�8�0�9�9�9�9�0�9�1�9�2�9�5�9�6�9�7�9�0�9�9�0�0�9�9�9�2�0�1�0�2�7�2�0�2�0�5�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�7�0�4�0�4�9�2�9�3�0�0�0�4�9�1�0�4�0�0�9�6�0�8�0�9�0�1�0�5�0�0�0�5�0�0�7�1�0�7�0�8�0�8�0�3�9�3�9�4�9�4�9�1�0�0�0�6�9�9�9�2�7�6�9�7�0�5�0�3�0�2�0�5�0�0�0�9�0�8�9�9�0�4�9�0�9�6�9�8�6�9�7�1�1�5�9�8�6�9�9�5�1�5�9�8�6�9�9�3�1�5�9�8�6�9�7�6�1�5�0�7�9�8�9�9�6�9��1�5�9�9�0�6�9�7�9�4�9�9�6�9�9�2�1�5�9�8�6�9�9�2�1�5�9�9�6�9�9�1�1�5�9�8�6�9�9�1�1�5�9�8�0�1�6�9��1�5�0�0�0�9�9�5�9�8�6�9��1�5�9�3�6�9��1�5�9�3�6�9��1�5�0�0�7�9�0�0�6�9��1�5�9�1�6�9��1�5�9�4�0�7�0�1�0�6�0�4�0�1�0�6�9�4�9�9�9�5�0�0�9�7�7�9�7�9�9�9�9�4�9�4�7�3�9�7�9�8�0�5�0�2�7�1�0�4�9�0�9�3�9�1�9�1�0�9�0�2�0�3�9�3�9�1�9�0�9�2�9�9�9�7�9�8�9�4�0�1�9�5�9�7�0�1�9�4�9�0�9�8�9�6�0�0�9�7�0�1�9�3�9�3�9�3�9�3�9�5�9�0�9�1�9�6�0�9�9�0�0�4�9�9�9�0�9�8�9�8�9�3�0�8�0�3�9�3�9�0�9�2�0�9�0�7�9�3�9�5�9�6�9�2�9�1�9�9�9�9�9�1�9�1�9�9�9�9�9�9�9�8�9�8�9�7�9�7�9�7�9�7�9�0�9�0�9�3�9�5�9�5�9�9�9�6�9�6�9�3�9�3�9�0�9�0�0�0�0�0�9�8�7�2�7�4�7�4�7�5�7�5�9�7�9�7�9�7�9�8�7�6�0�0�9�8�0�4�9�4�0�9�0�2�9�6�9�2�9�7�0�1�0�2�9�9�0�1�0�1�0�1�0�3�0�3�0�2�9�2�0�4�0�1�0�4�0�4�0�4�9�9�9�9�9�9�0�4�0�4�9�9�0�7�0�7�0�7�9�9�9�9�0�5�9�9�0�1�0�9�0�7�0�6�0�6�0�6�0�9�0�1�0�0�0�6�0�0�0�0�0�7�0�1�0�1�0�1�0�1�0�2�0�6�0�2�7�1�1�5�7�1�1�5�9�1�9�1�0�9�0�5�0�1�0�9�0�6�0�6�0�6�0�7�0�7",
const HELLO_TEXT = `Anonymous.. 
`;

module.exports = {
    TOKEN, CHAT_SPAM, GROUP_ID, BTN_TEXT, HELLO_TEXT, TIME
};