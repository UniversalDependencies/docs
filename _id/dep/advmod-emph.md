---
layout: relation
title: 'advmod:emph'
shortdef: 'a modifier used to emphazise its head'
udver: '2'
---

This is a special class of [advmod]().
This deprel is used in Indonesian grammar for foregrounding particles such as clitics _-lah/-kah_ and for focusing adjunct _pun_. These particles do not have a specific meaning. For example:
* _-lah_  such as in _Dialah pelakunya_ "He's the culprit", where _-lah_ emphasizes the subject _dia_ "he/she".
* _-kah_ such as in _Berapakah harganya?_ "How much does it cost?", where _-kah_ emphasizes the interrogative pronoun _berapa_ "how much".
* _pun_ such as in _Tidak seorang pun peduli_ "No one cares" where _pun_ emphazises _tidak seorang_ "no one".


~~~ sdparse
ROOT Dia lah pelaku nya . \n He is the culprit .
nsubj(pelaku, Dia)
advmod:emph(Dia, lah)
root(ROOT, pelaku)
det(pelaku, nya)
punct(pelaku, .)
~~~

~~~ sdparse
ROOT Berapa kah harga nya ? \n How much doest it cost ?
advmod(Berapa, harga)
advmod:emph(Berapa, kah)
root(ROOT, harga)
det(harga, nya)
punct(harga, ?)
~~~

~~~ sdparse
ROOT Tidak seorang pun peduli . \n No one care .
advmod(Tidak, seorang)
advmod:emph(seorang, pun)
root(ROOT, peduli)
nsubj(peduli, seorang)
punct(peduli, .)
~~~

