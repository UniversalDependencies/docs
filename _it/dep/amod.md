---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier is any adjective that serves to modify the meaning of a nominal head. In Italian, adjectival modifiers can occur both in pre- and post-nominal position. Note that in Italian the class of adjectives also includes ordinal numerals which thus can be adjectival modifiers (always depending on the context). Adjectives can be found as modifiers of nouns, verbs, pronouns, adverbs and other adjectives. 

~~~ sdparse
la magistratura/NOUN militare
amod(magistratura, militare)
~~~
~~~ sdparse
i prossimi giorni/NOUN
amod(giorni, prossimi)
~~~
~~~ sdparse
la prima segnalazione/NOUN
amod(segnalazione, prima)
~~~
~~~ sdparse
Qualcun/PRON altro/ADJ 
amod(Qualcun, altro)
~~~
~~~ sdparse
Lasciato/VERB solo/ADJ 
amod(Lasciato, solo)
~~~
~~~ sdparse
adottare principi/NOUN il più/ADV possibile/ADJ semplici/ADJ 
amod(semplici, possibile)
amod(principi, semplici)
advmod(possibile, più)
~~~

There are no instances of adjectives as sentence root in Italian, unless they are part of a verbal predicate with the verb *essere* as copula. 

~~~ sdparse
ROOT I magistrati sono inamovibili/ADJ .
root(ROOT, inamovibili)
cop(inamovibili, sono)
~~~
<!-- Interlanguage links updated St lis 3 20:58:38 CET 2021 -->
