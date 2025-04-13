---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for interjections and other discourse particles and elements (which are not clearly linked to the structure of the sentence, except in an expressive way). In Italian the use of <code>discourse</code> is attested for interjections (or nouns used as interjections) only, but is also generally recommended for emoticons or elements POS tagged as <code>SYM</code> not elsewhere classified.

~~~ sdparse
Grazie/INTJ Italia , ti ho dato l' oro .
discourse(dato, Grazie)
~~~
~~~ sdparse
Sì/INTJ , proprio l' Italia .
discourse(Italia, Sì)
~~~
~~~ sdparse
Brava , brava , complimenti/INTJ .
discourse(Brava, complimenti)
~~~

<code>discourse:emo</code> is used in PoSTWITA for emoticons/emojis.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:50 CET -->
