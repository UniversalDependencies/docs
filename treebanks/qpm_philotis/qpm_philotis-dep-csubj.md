---
layout: base
title:  'Statistics of csubj in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="qpm_philotis-dep-csubj-pass.html">csubj:pass</a></tt>.

116 nodes (0%) are attached to their parents as `csubj`.

100 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.81034482758621.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (83; 72% instances), <tt><a href="qpm_philotis-pos-PART.html">PART</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (17; 15% instances), <tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="qpm_philotis-pos-PART.html">PART</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	I	i	CCONJ	_	_	4	cc	_	_
2	fyrkaštǘn	fyrkaštǘ	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Coll	4	nsubj	_	_
3	so	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	atišlí	ídom	VERB	_	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	da	da	AUX	_	_	6	aux	_	_
6	vídet	vídem	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	xcomp	_	_
7	kaná	kaná	PRON	_	PronType=Int	9	obj	_	_
8	je	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	imǽlo	ímom	VERB	_	Aspect=Imp|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	csubj	_	_
10	faf	faf	ADP	_	_	11	case	_	_
11	syndýkane	syndýk	NOUN	_	Case=Acc|Definite=Def|Deixis=Remt|Gender=Masc|Number=Sing	9	obl:lmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Azám	azám	ADV	_	_	5	advmod	_	_
3	altonǧícka	altonǧík	DET	_	Number=Sing	4	det	_	_
4	zanajáta	zanajá	NOUN	_	Case=Acc|Definite=Def|Deixis=Prox|DeixisRef=2|Gender=Fem|Number=Sing	7	obj	_	_
5	néma	néma	PART	_	Polarity=Neg	0	root	_	_
6	da	da	AUX	_	_	7	aux	_	_
7	naučíš	náučem	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	pó	po	ADV	_	Degree=Cmp	2	advmod	_	_
2	húbbe	húbbe	ADV	_	_	0	root	_	_
3	še	še	AUX	_	_	2	aux	_	_
4	je	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	_
5	da	da	AUX	_	_	7	aux	_	_
6	go	ja	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	astávime	astávom	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
8	žýva	žýva	PROPN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


