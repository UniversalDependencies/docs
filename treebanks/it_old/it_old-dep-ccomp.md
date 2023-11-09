---
layout: base
title:  'Statistics of ccomp in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `ccomp`

This relation is universal.
There are 2 language-specific subtypes of `ccomp`: <tt><a href="it_old-dep-ccomp-relcl.html">ccomp:relcl</a></tt>, <tt><a href="it_old-dep-ccomp-reported.html">ccomp:reported</a></tt>.

290 nodes (1%) are attached to their parents as `ccomp`.

280 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.96896551724138.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (215; 74% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (31; 11% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (14; 5% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=21|Verso=102
2	rispondien	rispondere	VERB	vta2iip3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=21|SpaceAfter=No|Verso=102
3	:	:	PUNCT	_	_	7	punct	_	_
4	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
5	sì	sì	INTJ	i	_	7	discourse	_	Canto=21|SpaceAfter=No|Verso=102
6	,	,	PUNCT	_	_	5	punct	_	_
7	fa	fare	VERB	vta1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp:reported	_	Canto=21|Verso=102
8	che	che	SCONJ	cssb	_	11	mark	_	Canto=21|Verso=102
9	li	li	PRON	pp3xda	Clitic=Yes|Person=3|PronType=Prs	11	iobj	_	Canto=21|Verso=102
10	lo	lo	PRON	pp3msxac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	Canto=21|Verso=102
11	accocchi	accoccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	_	Canto=21|SpaceAfter=No|Verso=102
12	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Rispuose	rispondere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=8|SpaceAfter=No|Verso=36
2	:	:	PUNCT	_	_	4	punct	_	_
3	«	«	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Vedi	vedere	VERB	vta2ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	Canto=8|Verso=36
5	che	che	SCONJ	pr	PronType=Rel	7	mark	_	Canto=8|Verso=36
6	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	cop	_	Canto=8|Verso=36
7	un	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	4	ccomp	_	Canto=8|Verso=36
8	che	che	PRON	pr	PronType=Rel	9	nsubj	_	Canto=8|Verso=36
9	piango	piangere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Canto=8|SpaceAfter=No|Verso=36
10	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 ccomp	color:blue
1	Lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Canto=4|Verso=31
2	buon	buono	ADJ	a1ms	Gender=Masc|Number=Sing	3	amod	_	Canto=4|Verso=31
3	maestro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	0	root	_	Canto=4|Verso=31
4	a	a	ADP	epsk1d	_	5	case	_	Canto=4|Verso=31
5	me	me	PRON	pp1slco	Number=Sing|Person=1|PronType=Prs	3	orphan	_	Canto=4|SpaceAfter=No|Verso=31
6	:	:	PUNCT	_	_	10	punct	_	_
7	«	«	PUNCT	_	_	10	punct	_	SpaceAfter=No
8	Tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	10	nsubj	_	Canto=4|Verso=31
9	non	non	ADV	b	PronType=Neg	10	advmod:neg	_	Canto=4|Verso=31
10	dimandi	domandare	VERB	vta1ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:reported	_	Canto=4|Verso=31
11	che	che	DET	at	PronType=Int	12	det	_	Canto=4|Verso=32
12	spiriti	spirito	NOUN	sm2mp	Gender=Masc|Number=Plur	10	ccomp	_	Canto=4|Verso=32
13	son	essere	AUX	vi4ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	Canto=4|Verso=32
14	questi	questo	PRON	pd1mp	Gender=Masc|Number=Plur|PronType=Dem	12	obj	_	Canto=4|Verso=32
15	che	che	PRON	pr	PronType=Rel	17	obj	_	Canto=4|Verso=32
16	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	17	nsubj	_	Canto=4|Verso=32
17	vedi	vedere	VERB	vta2ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	Canto=4|SpaceAfter=No|Verso=32
18	?	?	PUNCT	_	_	10	punct	_	_

~~~


