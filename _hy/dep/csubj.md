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
Ինձ զարմացրեց այն , որ նա ոչինչ չասաց : \n Me surprised what , that he did-not-say anything .
csubj(զարմացրեց, չասաց)
csubj(surprised, did-not-say)
~~~

~~~ sdparse
Կատարվեց , ինչ սպասվում էր : \n Happened , what was expected .
csubj(Կատարվեց, սպասվում)
aux(սպասվում, էր)
csubj(Happened, expected)
aux(expected, was)
~~~

~~~ sdparse
Զինվորին հիվանդանոցից տուն փոխադրելը երկար տևեց : \n To-take the soldier to house from hospital took long .
csubj(տևեց, փոխադրելը)
csubj(took, To-take)
~~~

We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction որ similarly.

~~~ sdparse
Լավ է , որ դու կարդացել ես գիրքը : \n Good is , that you have read the-book .
csubj(Լավ, կարդացել)
cop(Լավ, է)
aux(կարդացել, ես)
csubj(Good, read)
cop(Good, is)
aux(read, have)
~~~
