---
layout: relation
title: 'case:adv'
shortdef: 'case marking to form adverbs'
udver: '2'
---

This deprel is a special class of [case]().
While deprel 'case' is usually a nominal dependent, in Indonesian it also can be used to form adverbs. The tokens that can be labeled as _case:adv_ are preposition _secara_ "in a manner" and _dengan_ "with/in a manner of". These prepositions are followed by tokens with POS tags ADJ/VERB/NOUN that serve as their parents. For example:
* _secara/dengan_ + ADJ: _dengan sengaja_ "purposely/intentionally" = _dengan_ "in a manner of" (ADP) + _sengaja_ "on purpose" (ADJ)
* _secara/dengan_ + VERB: _secara terbuka_ "openly" = _secara_ "in a manner of" (ADP) + _terbuka_ "open" (VERB)
* _secara/dengan_ + NOUN: _secara keseluruhan_ "overall" = _secara_ "in a manner of" (ADP) + _keseluruhan_ "whole" (NOUN)


~~~ sdparse
dijual secara legal \n sold legally
advmod(dijual, legal)
case:adv(legal, secara)
~~~

~~~ sdparse
dipilih dengan sengaja \n selected intentionally
advmod(dipilih, sengaja)
case:adv(sengaja, dengan)
~~~

~~~ sdparse
merespon secara terbuka \n to respon openly
advcl(merespon, terbuka)
case:adv(terbuka, secara)
~~~

~~~ sdparse
menguntungkan secara keseluruhan \n beneficial as a whole
obl(menguntungkan, keseluruhan)
case:adv(keseluruhan, secara)
~~~

