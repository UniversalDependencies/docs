---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The obl relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

~~~ conllu
# sent_id = VV-FRE#026
# text = INDX.PRO:3pl TEMA INDX.PRO:1sg DECIR NADA
# gloss_en = INDX.PRO:3pl TOPIC INDX.PRO:1sg SAY NOTHING
# text_es = Ellos de mí no me dicen nada
# text_en = They don't tell me anything about myself
1	INDX.PRO:3pl	_	PRON	Pro	_	4	nsubj	_	Gloss=INDX.PRO:3pl
2	TEMA	_	ADP	xxx	_	3	case	_	Gloss=TOPIC
3	INDX.PRO:1sg	_	PRON	Pro	_	4	obl	_	Gloss=INDX.PRO:1sg
4	DECIR	_	VERB	V.Dir	_	0	root	_	Gloss=SAY
5	NADA	_	NOUN	N	_	4	obj	_	Gloss=NOTHING
~~~

The LSE makes very little use of adpositions and it is common for nominals that function as non-core arguments or adjuncts to be unmarked.

~~~ conllu
# sent_id = VV-FRE#056
# text = MERCADO HOMBRE PERSONA HABITACIÓN LLEVAR
# gloss_en = MARKET MAN PERSON CUBICLE CARRY
# text_es = Los hombres llevaron las cajas al mercado
# text_en = The men carried the boxes to the market
1	MERCADO	_	NOUN	N	_	5	obl	_	Gloss=MARKET
2	HOMBRE	_	NOUN	N.P	_	5	nsubj	_	Gloss=MAN
3	PERSONA	_	NOUN	N.Loc	_	2	appos	_	Gloss=PERSON
4	HABITACIÓN	_	NOUN	N	_	5	obj	_	Gloss=CUBICLE
5	LLEVAR	_	VERB	V.Loc	_	0	root	_	Gloss=CARRY
~~~
~~~ conllu
# user_id = jmgm60
# sent_id = VV-FRE#037
# text = MUJER IR cl.d(1):lugar
# gloss_en = WOMAN GO cl
# text_es = La mujer fue a un lugar
# text_en = The woman went to a place
1	MUJER	_	NOUN	N.P	_	2	nsubj	_	Gloss=WOMAN
2	IR	_	VERB	V.Loc	_	0	root	_	Gloss=GO
3	cl.d(1):lugar	_	NOUN	N.D	_	2	obl	_	Gloss=cl
~~~
