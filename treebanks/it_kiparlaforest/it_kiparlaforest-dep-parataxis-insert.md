---
layout: base
title:  'Statistics of parataxis:insert in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-parataxis.html">parataxis</a></tt>.
There are also 2 other language-specific subtypes of `parataxis`: <tt><a href="it_kiparlaforest-dep-parataxis-parenth.html">parataxis:parenth</a></tt>, <tt><a href="it_kiparlaforest-dep-parataxis-restart.html">parataxis:restart</a></tt>.

5 nodes (0%) are attached to their parents as `parataxis:insert`.

3 instances of `parataxis:insert` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 4 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 parataxis:insert	color:blue
1	e	e	CCONJ	_	_	6	cc	_	Begin=885.285|KID=476-0|PaceFast=Yes
2	poi	poi	ADV	_	_	6	advmod	_	KID=476-1|PaceFast=Yes
3	da	da	ADP	_	_	4	case	_	KID=476-2|PaceFast=Yes
4	lì	lì	ADV	_	_	6	obl	_	KID=476-3|PaceFast=Yes
5	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	expl	_	KID=476-4|PaceFast=Yes|SpaceAfter=No
6	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=476-5|PaceFast=Yes|Prolonged=Yes
7	anche	anche	ADV	_	_	6	advmod	_	End=886.245|KID=476-6|PaceFast=Yes
8	da	da	ADP	_	_	13	reparandum	_	Begin=886.35|KID=477-0|PauseAfter=Yes
9	diciamo	dire	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	13	parataxis:insert	_	KID=477-2
10	da	da	ADP	_	_	13	reparandum	_	KID=477-3a
11	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	KID=477-3b
12	di	di	ADP	_	_	13	case	_	KID=477-5
13	lato	lato	NOUN	_	Gender=Masc|Number=Sing	15	obl	_	KID=477-6|Prolonged=Yes
14	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	15	expl	_	KID=477-7|SpaceAfter=No
15	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj:reform	_	KID=477-8
16	anche	anche	ADV	_	_	19	advmod	_	KID=477-9
17	tutta	tutto	DET	_	Gender=Fem|Number=Sing|PronType=Tot	19	det:predet	_	KID=477-10
18	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	KID=477-11
19	vista	vista	NOUN	_	Gender=Fem|Number=Sing	15	nsubj	_	Intonation=WeaklyRising|KID=477-12
20	su	su	ADP	_	_	22	case	_	KID=477-13|Prolonged=Yes
21	tutta	tutto	DET	_	Gender=Fem|Number=Sing|PronType=Ind	22	det	_	KID=477-14|OverlappingGroup=234
22	bologna	Bologna	PROPN	_	_	19	nmod	_	End=891.29|KID=477-15|OverlappingGroup=234|PaceSlow=Yes

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 parataxis:insert	color:blue
1	eh	eh	INTJ	_	_	3	discourse:filler	_	Begin=41.203|End=41.899|KID=16-0|Prolonged=Yes
2	possiamo	potere	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	Begin=41.998|KID=17-0
3	dare	dare	VERB	_	VerbForm=Inf	0	root	_	KID=17-1
4	un'	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	KID=17-2|SpaceAfter=No
5	occhiata	occhiata	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	KID=17-3
6	se	se	SCONJ	_	_	7	mark	_	KID=17-4
7	volete	volere	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis:parenth	_	KID=17-5
8	dire	dire	VERB	_	VerbForm=Inf	3	conj	_	KID=17-6
9	quanto	quanto	ADV	_	_	10	mark	_	KID=17-7
10	sono	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	reparandum	_	End=44.583|Intonation=WeaklyRising|KID=17-8
11	intanto	intanto	ADV	_	_	14	advmod	_	Begin=44.608|KID=18-0
12	che	che	DET	_	PronType=Int	13	det	_	KID=18-1
13	ore	ora	NOUN	_	Gender=Fem|Number=Plur	14	nsubj	_	KID=18-2
14	sono	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis:parenth	_	End=45.492|KID=18-3
15	questa	questo	DET	_	Gender=Fem|Number=Sing|PronType=Dem	17	det	_	Begin=45.568|KID=19-0
16	prima	primo	NUM	_	_	17	nummod	_	KID=19-1
17	domanda	domanda	NOUN	_	Gender=Fem|Number=Sing	14	parataxis:insert	_	KID=19-2
18	fondamentale	fondamentale	ADJ	_	Number=Sing	17	amod	_	End=47.273|KID=19-3
19	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	Begin=47.512|KID=20-0|Volume=low
20	tre	tre	NUM	_	NumType=Card	14	discourse	_	KID=20-1|Volume=low
21	okay	okay	INTJ	_	_	20	discourse	_	End=48.154|KID=20-2|Volume=low
22	quanto	quanto	ADV	_	_	24	advmod	_	Begin=49.046|KID=21-0
23	sono	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	KID=21-1
24	diversi	diverso	ADJ	_	Gender=Masc|Number=Plur	8	ccomp	_	End=50.086|Intonation=Rising|KID=21-2
25	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	Begin=50.454|KID=22-0
26	dialetti	dialetto	NOUN	_	Gender=Masc|Number=Plur	24	nsubj	_	End=51.278|Intonation=Rising|KID=22-1
27	uno	uno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	24	xcomp	_	Begin=51.419|KID=23-0
28	da	da	ADP	_	_	30	case	_	KID=23-1a
29	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	30	det	_	KID=23-1b
30	altro	altro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	27	nmod	_	End=52.581|Intonation=Rising|KID=23-2

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 parataxis:insert	color:blue
1	non	non	ADV	_	PronType=Neg	3	advmod	_	Begin=434.96|KID=243-0|OverlappingGroup=54
2	lo	lo	PRON	_	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	KID=243-1|OverlappingGroup=54
3	so	sapere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=243-2|OverlappingGroup=54
4	sai	sai	ADV	_	_	3	parataxis:insert	_	KID=243-3|Prolonged=Yes

~~~


