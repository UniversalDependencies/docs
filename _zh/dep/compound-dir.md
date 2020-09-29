---
layout: relation
title: 'compound:dir'
shortdef: 'directional verb compound'
udver: '2'
---

A "directional verb compound" (known as "directional complement" in Chinese linguistics) consists of a series of at least two verbs where the second verb is one of the directional or deitic motion verbs (or a combination of the two) in the below exhaustive list. Some linguists argue that these verbs have grammaticalized into adposition-like particles in this [verb + directional verb] construction, with their particle semantics listed in parentheses below. 

- (A) Eight verbs expressing directional motion
  - 上 / _shàng_ "go up" (up)
  - 下 / _xià_ "go down" (down)
  - 出 / _chū_ "exit" (out)
  - 進 / _jìn_ "enter" (in(to))
  - 回 / _huí_ "return" (back)
  - 過 / _guò_ "cross" (over)
  - 開 / _kāi_ "open, separate, come apart/away" (away)
  - 起 / _qǐ_ "rise, arise" (up)

- (B) Two verbs expressing deictic motion
  - 來 / _lái_ "come" (towards deitic center)
  - 去 / _qù_ "go" (away from deitic center)

- Some combinations of the above two, only in AB order 
  - e.g., 回來 / _huílái_ "come back" (back towards deitic center), 上來 / _shànglái_ "come up" (up towards deitic center), 下去 / _xiàqù_ "go down" (down from deitic center), 進去 / _jìnqù_ "go in" (in from deitic center), etc.
  - (Note: each combination is considered a single-token verb)

~~~ conllu
# visual-style 2 3 compound:dir	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	爬	_	VERB	_	_	0	root	_	climb
3	上來	_	VERB	_	_	2	compound:dir	_	come-up
4	了	_	PART	_	_	2	discourse:sp	_	SP

1	"He's	_	_	_	_	0	_	_	_
2	climbed	_	_	_	_	0	_	_	_
3	up	_	_	_	_	0	_	_	_
4	(toward	_	_	_	_	0	_	_	_
5	speaker)."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 5 compound:dir	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	把	_	ADP	_	_	3	case	_	BA
3	你	_	PRON	_	_	4	obl	_	2SG
4	留	_	VERB	_	_	0	root	_	keep
5	下來	_	VERB	_	_	4	compound:dir	_	come-down

1	"I'm	_	_	_	_	0	_	_	_
2	keeping	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	here."	_	_	_	_	0	_	_	_

~~~

In some situations, the AB combination may be split, in which case they are both `compound:dir` dependents of the first verb.

~~~ conllu
# visual-style 2 3 compound:dir	color:blue
# visual-style 2 5 compound:dir	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	爬	_	VERB	_	_	0	root	_	climb
3	上	_	VERB	_	_	2	compound:dir	_	come-up
4	山	_	NOUN	_	_	2	obj	_	mountain
5	去	_	VERB	_	_	2	compound:dir	_	go
6	了	_	PART	_	_	2	discourse:sp	_	SP

1	"He's	_	_	_	_	0	_	_	_
2	climbed	_	_	_	_	0	_	_	_
3	up	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	mountain	_	_	_	_	0	_	_	_
6	(away	_	_	_	_	0	_	_	_
7	from	_	_	_	_	0	_	_	_
8	speaker)."	_	_	_	_	0	_	_	_

~~~

Directional verb compounds can have idiomatic meanings that make them similar to phrasal verbs in some European languages, where the directional verb (or particle) no longer necessarily refers to spatial direction or deixis. Regardless of their grammaticalized non-spatial uses, we treat them all as part of a directional verb compound when they work together with a main verb.

~~~ conllu
# visual-style 2 3 compound:dir	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	想	_	VERB	_	_	0	root	_	think
3	起	_	VERB	_	_	2	compound:dir	_	rise
4	了	_	PART	_	_	2	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	remember	_	_	_	_	0	_	_	_
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
2	他們	_	PRON	_	_	1	obj	_	3PL
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
1	他	_	PRON	_	_	4	nsubj	_	3SG.M
2	跟	_	ADP	_	_	3	case	_	with
3	我	_	PRON	_	_	4	obl	_	1SG
4	過	_	VERB	_	_	0	root	_	cross
5	不	_	ADV	_	_	6	advmod	_	NEG
6	去	_	VERB	_	_	4	compound:dir	_	go

1	"He	_	_	_	_	0	_	_	_
2	doesn't	_	_	_	_	0	_	_	_
3	get	_	_	_	_	0	_	_	_
4	along	_	_	_	_	0	_	_	_
5	with	_	_	_	_	0	_	_	_
6	me."	_	_	_	_	0	_	_	_

~~~


<!-- Interlanguage links updated Út zář 29 20:23:24 CEST 2020 -->
