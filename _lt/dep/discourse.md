---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The `discourse` relation is used for interjections and other discourse particles or words which are not clearly linked to the syntactic structure of the sentence except in an expressive way or discursive sense. 
In Lithuanian, for example, this includes: interjections (1, 2), list enumerators, bullets (3), emoticons and other symbols (4), single-word parentheticals (5, 6), affirmative or negative words, set off by commas (7).

The `discourse` relation is attached either to the nearest syntactic head or to the word with which it is associated or emphasized.

### Interjections

~~~ sdparse
Aū , Tomai , kur tu ? \n Hey , Tomas , where-are you ?
discourse(kur, Aū)
discourse(where-are, Hey)
~~~

~~~ sdparse
Ai , tu juokauji ! \n Ah , you are-joking !
discourse(juokauji, Ai)
discourse(are-joking, Ah)
~~~

### List enumerators, bullets

~~~ sdparse
Į stadioną negalima įsinešti : a) ginklų , b) maisto , c)  gėrimų .  \n It-is-not-allowed to-bring into the-stadium : a) weapons , b) food , c) drinks .
discourse(ginklų, a)-6)
discourse(maisto, b)-9)
discourse(gėrimų, c)-12)
discourse(weapons, a)-21)
discourse(food, b)-24)
discourse(drinks, c)-27)
~~~

### Emoticons, symbols and signs

~~~ sdparse
Kaunas yra Lietuvoje :) \n Kaunas is in-Lithuania :)
discourse(Lietuvoje, :)-4)
discourse(in-Lithuania, :)-9)
~~~

### Single-word parenthicals

~~~ sdparse
Deja , tokia yra neišvengiamybė . \n Alas , that is inevitable .
discourse(tokia, Deja)
discourse(that, Alas)
~~~

~~~ sdparse
Beje , jis dar neatvyko . \n By-the-way , he hasn’t-arrived yet .
discourse(neatvyko, Beje)
discourse(hasn’t-arrived, By-the-way)
~~~

### Affirmative and negative words in a sentence, separated by commas

~~~ sdparse
Taip , šiandien lis . \n Yes , it-will-rain today . 
discourse(lis, Taip)
discourse(it-will-rain, Yes)
~~~ 
<!-- Interlanguage links updated Po 29. června 2026, 17:59:46 CEST -->
