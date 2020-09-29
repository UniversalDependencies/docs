---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the
clause is the complement of the copular verb. The dependent is the main lexical verb or other 
predicate of the subject clause.

For the clausal subject of a passive verb or verb group the subtype [csubj:pass]() is used.

~~~ sdparse
Ինձ զարմացրեց , որ նա ոչինչ չասաց : \n Me surprised , that he did-not-say anything .
csubj(զարմացրեց, չասաց)
mark(չասաց, որ)
csubj(surprised, did-not-say)
mark(did-not-say, that)
~~~

~~~ sdparse
Զինվորին հիվանդանոցից տուն փոխադրելը երկար տևեց : \n To-take the soldier to house from hospital took long .
csubj(տևեց, փոխադրելը)
csubj(took, To-take)
~~~

~~~ sdparse
Հարկավոր է խոսել ։ \n It-is necessary to-speak .  
csubj(Հարկավոր, խոսել)
csubj(necessary, to-speak)
~~~

We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _որ_ similarly.

~~~ sdparse
Լավ է , որ դու կարդացել ես գիրքը : \n Good is , that you have read the-book .
csubj(Լավ, կարդացել)
cop(Լավ, է)
aux(կարդացել, ես)
mark(կարդացել, որ)
csubj(Good, read)
cop(Good, is)
aux(read, have)
mark(read, that)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:15 CEST 2020 -->
