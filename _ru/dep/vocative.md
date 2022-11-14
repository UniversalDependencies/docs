---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark dialogue participant addressed in text.
The relation links the addressee's name to its host sentence.
In Russian, the addressee's name usually appear in either nominative or vocative [Case]() form.

~~~ sdparse
Мужчина , Вы дурак ! \n Sir , you-are a-fool !
vocative(дурак, Мужчина)
vocative(a-fool, Sir)
~~~

~~~ sdparse
Замолчи , Дунь ! \n Shut-up , Dunya !
vocative(Замолчи, Дунь)
vocative(Shut-up, Dunya)
~~~

<!-- Interlanguage links updated Po lis 14 15:35:45 CET 2022 -->
