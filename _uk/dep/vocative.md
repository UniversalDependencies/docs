---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark dialogue participant addressed in text.
The relation links the addressee’s name to its host sentence.
In Ukrainian, the addressee's name usually appears in the vocative [uk-feat/Case](). For clausal vocatives, there is [`vocative:cl`](vocative-cl.html).

~~~ sdparse
Пане Президенте , скільки можна ? \n Mister President , you-should-stop-it !
vocative(можна, Президенте)
vocative(you-should-stop-it, President)
~~~

~~~ conllu
# visual-style 1 3 vocative color:green
1 Влаштовуйтесь влаштовуватися VERB Vmpm-2p Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin 0 root _ Id=02a5|LTranslit=vlaštovuvatyśа|SpaceAfter=No|Translit=Vlaštovujteś
2 , , PUNCT U _ 3 punct _ Id=02a6|LTranslit=,|Translit=,
3 товаришу товариш NOUN Ncmsvy Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing 1 vocative _ Id=02a7|LTranslit=tovaryš|SpaceAfter=No|Translit=tovaryšu
4 , , PUNCT U _ 3 punct _ Id=02a8|LTranslit=,|Translit=,
5 як як SCONJ Css _ 6 mark _ Id=02a9|LTranslit=jak|Translit=jak
6 вдома вдома ADV R _ 1 advcl _ Id=02aa|LTranslit=vdoma|SpaceAfter=No|Translit=vdoma
7 . . PUNCT U _ 1 punct _ Id=02ab|LTranslit=.|Translit=.

# visual-style 1 3 vocative color:green
1 Make-yourself _ _ _ _ 0 root _ _
2 , _ _ _ _ 0 root _ _
3 mate _ _ _ _ 1 vocative _ _
4 , _ _ _ _ 0 root _ _
5 like _ _ _ _ 0 root _ _
6 at-home _ _ _ _ 0 root _ _
7 . _ _ _ _ 0 root _ _
~~~
<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
