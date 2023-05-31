---
layout: base
title:  'Statistics of expl in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `expl`

This relation is universal.

1008 nodes (0%) are attached to their parents as `expl`.

984 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21428571428571.

The following 19 pairs of parts of speech are connected with `expl`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (530; 53% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (175; 17% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (71; 7% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (51; 5% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (37; 4% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (33; 3% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (27; 3% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (20; 2% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (18; 2% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Но	но	CCONJ	_	_	5	cc	5:cc	_
2	главное	главное	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
3	-	-	PUNCT	_	_	2	punct	2:punct	_
4	это	это	PRON	_	PronType=Dem	5	expl	5:expl	_
5	эффективность	эффективность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
6	государства	государство	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	nmod	5:nmod:gen	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 expl	color:blue
1	Ах	ах	INTJ	_	_	2	discourse	2:discourse	_
2	да	да	PART	_	_	10	parataxis	10:parataxis	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	ведь	ведь	PART	_	_	5	advmod	5:advmod	_
5	Одесса	Одесса	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
6	-	-	PUNCT	_	_	10	punct	10:punct	_
7	это	это	PART	_	_	10	expl	10:expl	_
8	не	не	PART	_	Polarity=Neg	9	advmod	9:advmod	_
9	только	только	PART	_	_	10	advmod	10:advmod	_
10	море	море	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	12:punct	_
12	цыганка	цыганка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	conj	0:root|10:conj	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	14:punct	_
14	кукуруза	кукуруза	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	conj	0:root|10:conj	SpaceAfter=No
15	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	expl	4:expl	_
2	как	как	ADV	_	Degree=Pos	4	advmod	4:advmod	_
3	кто	кто	PRON	_	Case=Nom|PronType=Int,Rel	4	nsubj	4:nsubj	_
4	решит	решить	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	для	для	ADP	_	_	6	case	6:case	_
6	себя	себя	PRON	_	Case=Gen|PronType=Prs|Reflex=Yes	4	obl	4:obl:для:gen	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	посмотрев	смотреть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	4	advcl	4:advcl	_
9	фильм	фильм	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


