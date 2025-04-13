---
layout: relation
title: 'orphan:nsubjobj'
redirect_from: "cs/dep/remnant.html"
shortdef: 'connecting orphaned arguments of elided predicate, particularly the subject as the parent and the object as the child'
udver: '2'
---

The `orphan:nsubjobj` relation provides information about the relations of the orphaned arguments to the elided predicate. The head of the realtion is the subject of the verb, while the dependent argument is its object.

~~~ conllu
# text = مریم لیک او پیتر کتاب لیکي.
1	مریم  مریم  PROPN  _  Case=Nom|Gender=Fem|Number=Sing  0  root  _  Gloss=Mary|LTraanslit=maryám|Translit=maryám
2	لیک  لیک  NOUN  _  Case=Nom|Gender=Masc|Number=Sing  1  orphan:nsubjobj  _  Gloss=letter|LTranslit=lik|Translit=lik
3	او  او  CCONJ  _  _  6  cc  _  Gloss=and|LTranslit=aw|Translit=aw
4	پیتر  پیتر  PROPN  _  Case=Nom|Gender=Masc|Number=Sing  6  nsubj  _  Gloss=Peter|LTranslit=pítër|Translit=pítër
5	کتاب  کتاب  NOUN  _  Case=Nom|Gender=Masc|Number=Sing  6  obj  _  Gloss=book|LTranslit=kitấb|Translit=kitấb
6	لیکي لیکي   VERB  _  Aspect=Imp|Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin  1  conj  _  Gloss=writes|LTranslit=likë́l|SpaceAfter=No|Translit=likí  
7	.  .  PUNCT  _  _  1  punct  _  Gloss=.|LTranslit=.|Translit=.
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:23 CET -->
