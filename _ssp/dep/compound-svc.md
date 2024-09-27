---
layout: relation
title: 'compound:svc'
shortdef: 'serial verb construction'
udver: '2'
---

In this type of construction, several verbs are combined to describe the same action. The verbs in a serial verb construction share the same subject but not necessarily the same object. 

The `compound:svc` relation is used in Spanish Sign Language only for sequences 

a) expressing a cause-consequence relation; 
~~~ conllu
# sent_id = HC-JRV#060
# text = FÁCIL LOBO SOPLAR cl.e:CASA-desintegrarse
# gloss_en = EASY WOLF BLOW cl
# text_es = "Soplaré y con facilidad volaré (tu) casa".
# text_en = I will huff 'n puff with ease and bring (your) house down".
1	FÁCIL	_	ADV	Adv	_	4	advmod	_	Gloss=EASY
2	LOBO	_	NOUN	N	_	3	nsubj	_	Gloss=WOLF
3	SOPLAR	_	VERB	V	_	0	root	_	Gloss=BLOW
4	cl.e:CASA-desintegrarse	_	VERB	V.D	_	3	compound:svc	_	Gloss=cl
~~~

b) consecutive actions expressed through descriptive predicates (or verb lexeme + descriptive predicate); 
~~~ conllu
# sent_id = PS-JRV#018
# text = UNO cl.m(5d):coger-fruta cl.m(5d):examinar-fruta
# gloss_en = ONE cl cl
# text_es = Tomó una pera y la observó bien.
# text_en = picked a pear and observed it carefully.
1	UNO	_	NUM	Num	_	2	obj	_	Gloss=ONE
2	cl.m(5d):coger-fruta	_	VERB	V.D	_	0	root	_	Gloss=cl
3	cl.m(5d):examinar-fruta	_	VERB	V.D	_	2	compound:svc	_	Gloss=cl
~~~ 

c) instances of general + specific action (this last expressed by a descriptive predicate).
~~~ conllu
# sent_id = VV-FRE#022
# text = HOMBRE MUJER PEQUEÑO2(2M) SENTAR cl.e(2d):PERSONAS-sentar+círculo
# gloss_en = MAN WOMAN SMALL2(2H) SIT cl
# text_es = Los niñ@s se sientan en el suelo
# text_en = The girls/boys sit on the floor
1	HOMBRE	_	NOUN	N.P	_	4	nsubj	_	Gloss=MAN
2	MUJER	_	NOUN	N.P	_	1	conj	_	Gloss=WOMAN
3	PEQUEÑO2(2M)	_	ADJ	Adj	_	1	amod	_	Gloss=SMALL2(2H)
4	SENTAR	_	VERB	V	_	0	root	_	Gloss=SIT
5	cl.e(2d):PERSONAS-sentar+círculo	_	VERB	V.D	_	4	compound:svc	_	Gloss=cl
~~~ 
