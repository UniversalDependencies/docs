---
layout: relation
title: 'compound:dir'
shortdef: 'directional verb compound'
udver: '2'
---

A "directional verb compound" (known as "directional complement" in Chinese linguistics) consists of a series of at least two verbs where the second verb is one of the directional or deitic motion verbs (or a combination of the two) in the below exhaustive list. Some linguists argue that these verbs have grammaticalized into adposition-like particles in this [verb + directional verb] construction, with their particle semantics listed in parentheses below. 

- (A) Ten verbs expressing directional motion
  - 出 / _ceot1_ "exit" (out)
  - 入 / _jap6_ "enter" (in(to))
  - 上 / _soeng5_ "go up" (up)
  - 落 / _lok6_ "go down" (down into)
  - 低 / _dai1_ "lower" (down)
  - 返 / _faan1_ "return" (back)
  - 埋 / _maai4_ "approach" (near, toward)
  - 過 / _guo3_ "cross" (over)
  - 開 / _hoi1_ "open, separate, come apart/away" (away)
  - 起 / _hei2_ "rise, arise" (up)

- (B) Two verbs expressing deictic motion
  - 嚟 / _lei4_ "come" (towards deitic center)
  - 去 / _heoi3_ "go" (away from deitic center)

- Some combinations of the above two, only in AB order 
  - e.g., 返嚟 / _faan1lei4_ "come back" (back towards deitic center), 上嚟 / _soeng5lei4_ "come up" (up towards deitic center), 落去 / _lok3heoi3_ "go down" (down from deitic center), 入去 / _jap6heoi3_ "go in" (in from deitic center), etc.
  - (Note: each combination is considered a single-token verb)

~~~ conllu
# visual-style 2 3 compound:dir	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	爬	_	VERB	_	_	0	root	_	climb
3	上嚟	_	VERB	_	_	2	compound:dir	_	come-up
4	嘑	_	PART	_	_	2	discourse:sp	_	SP

1	"He's	_	_	_	_	0	_	_	_
2	climbed	_	_	_	_	0	_	_	_
3	up	_	_	_	_	0	_	_	_
4	(toward	_	_	_	_	0	_	_	_
5	speaker)."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 compound:dir	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	擺	_	VERB	_	_	0	root	_	put
2	低	_	VERB	_	_	1	compound:dir	_	down
3	啲	_	NOUN	_	_	4	det	_	CL:mass/plural
4	嘢	_	NOUN	_	_	1	obj	_	stuff

1	"put	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	stuff	_	_	_	_	0	_	_	_
4	down"	_	_	_	_	0	_	_	_

~~~

Unlike in Mandarin, the AB combination cannot be split in Cantonese.

Directional verb compounds can have idiomatic meanings that make them similar to phrasal verbs in some European languages, where the directional verb (or particle) no longer necessarily refers to spatial direction or deixis. Regardless of their grammaticalized non-spatial uses, we treat them all as part of a directional verb compound when they work together with a main verb.

~~~ conllu
# visual-style 2 3 compound:dir	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	諗	_	VERB	_	_	0	root	_	think
3	起	_	VERB	_	_	2	compound:dir	_	rise
4	嘑	_	PART	_	_	2	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	recall	_	_	_	_	0	_	_	_
3	(lit.	_	_	_	_	0	_	_	_
4	think	_	_	_	_	0	_	_	_
5	up)	_	_	_	_	0	_	_	_
6	now"	_	_	_	_	0	_	_	_

~~~

Other words such as the direct object (5) or the affirmative potential 得 _de_ and negative potential 不 _bù_ can intervene. Uses involving the potential morphemes in directional verb compounds can often have idiomatic meanings as well (6).

~~~ conllu
# visual-style 1 3 compound:dir	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	帶	_	VERB	_	_	0	root	_	take
2	佢哋	_	PRON	_	_	1	obj	_	3PL
3	出去	_	VERB	_	_	1	compound:dir	_	go-out

1	"Take	_	_	_	_	0	_	_	_
2	them	_	_	_	_	0	_	_	_
3	out."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 6 compound:dir	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	佢	_	PRON	_	_	4	nsubj	_	3SG.M
2	同	_	ADP	_	_	3	case	_	with
3	我	_	PRON	_	_	4	obl	_	1SG
4	過	_	VERB	_	_	0	root	_	cross
5	唔	_	ADV	_	_	6	advmod	_	NEG
6	去	_	VERB	_	_	4	compound:dir	_	go

1	"He	_	_	_	_	0	_	_	_
2	doesn't	_	_	_	_	0	_	_	_
3	get	_	_	_	_	0	_	_	_
4	along	_	_	_	_	0	_	_	_
5	with	_	_	_	_	0	_	_	_
6	me."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:47 CEST 2020 -->
