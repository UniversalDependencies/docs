---
layout: relation
title: 'case:adv'
shortdef: 'case marking to form adverbs'
udver: '2'
---

This deprel is a special class of [case](). While deprel 'case' is usually used for ADP as a nominal dependent, for this subtype, ADP can be a dependent of ADJ/VERB and together with its parent, they form adverbs.

In Indonesian grammar, we can use syntax ADP + ADJ/VERB/NOUN to form adverbs. For example:
1. _secara/dengan_ + ADJ: _dengan sengaja_ "purposely/intentionally" = _dengan_ "in a manner of" (ADP) + _sengaja_ "on purpose" (ADJ)
2. _secara/dengan_ + VERB: _secara terbuka_ "openly" = _secara_ "in a manner of" (ADP) + _terbuka_ "open" (VERB)
3. _secara/dengan_ + NOUN: _secara keseluruhan_ "overall" = _secara_ "in a manner of" (ADP) + _keseluruhan_ "whole" (NOUN)

Since we can not use deprel 'case' for syntax 1 and 2 for ADP + ADJ/VERB, we propose the use of subtype 'case:adv'. 

~~~ sdparse
dijual secara legal \n sold legally
advmod(dijual, legal)
case:adv(legal, secara)
~~~

~~~ sdparse
merespon secara terbuka \n to respon openly
advcl(merespon, terbuka)
case:adv(terbuka, secara)
~~~

~~~ sdparse
menguntungkan secara keseluruhan \n beneficial as a whole
obl(menguntungkan, keseluruhan)
case(keseluruhan, secara)
~~~

