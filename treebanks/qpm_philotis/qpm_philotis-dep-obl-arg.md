---
layout: base
title:  'Statistics of obl:arg in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="qpm_philotis-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="qpm_philotis-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="qpm_philotis-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="qpm_philotis-dep-obl-tmod.html">obl:tmod</a></tt>.

70 nodes (0%) are attached to their parents as `obl:arg`.

47 instances of `obl:arg` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48571428571429.

The following 8 pairs of parts of speech are connected with `obl:arg`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (47; 67% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-DET.html">DET</a></tt> (9; 13% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="qpm_philotis-pos-DET.html">DET</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:arg	color:blue
1	Áma	áma	CCONJ	_	_	3	cc	_	_
2	her	her	DET	_	PronType=Tot	3	det	_	_
3	gün	gün	NOUN	_	Definite=Ind	10	nmod:tmod	_	_
4	óti	óti	SCONJ	_	_	5	mark	_	_
5	béhte	béhte	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	_
6	jétse	játse	ADV	_	_	7	advmod:emph	_	_
7	akylý	akylý	ADV	_	_	10	advmod	_	_
8	pak	pak	SCONJ	_	_	10	cc	_	_
9	sa	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	10	expl	_	_
10	fátihte	fátem	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	za	za	ADP	_	_	12	case	_	_
12	nusavéte	nusavét	NOUN	_	Case=Acc|Definite=Def|Deixis=Prox|DeixisRef=2|Gender=Masc|Number=Plur	10	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 obl:arg	color:blue
1	Čúdili	čúdem	VERB	_	Animacy=Hum|Aspect=Imp|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	só	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	_	_
3	so	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
4	kak	kak	ADV	_	PronType=Int	5	advmod	_	_
5	móža	móžom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
6	da	da	AUX	_	_	7	aux	_	_
7	stáne	stánom	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	_
8	inélkus	isélkus	DET	_	Deixis=Remt|PronType=Dem	9	det	_	_
9	belǽ	belǽ	ADJ	_	Definite=Ind	7	xcomp	_	_
10	rábata	rábata	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
11	i	i	CCONJ	_	_	15	cc	_	_
12	at	at	ADP	_	_	13	case	_	_
13	kutróga	kutrí	DET	_	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|PronType=Int	15	obl:arg	_	_
14	da	da	AUX	_	_	15	aux	_	_
15	paíštot	póištom	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
16	akýla	akýl	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	15	obj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:arg	color:blue
1	Izláze	izlázem	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	otpréš	atpréš	ADP	_	_	3	case	_	_
3	Asána	Asán	PROPN	_	Case=Acc|Gender=Masc	1	obl:arg	_	_
4	edín	adín	DET	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	def	def	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	nsubj	_	_
6	i	i	CCONJ	_	_	7	cc	_	_
7	víka	víkom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	mú	ja	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	iobj	_	SpaceAfter=No
9	:	:	PUNCT	_	_	7	punct	_	_
10	«	«	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	Dej	dam	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	7	ccomp	_	_
12	móne	ja	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	iobj	_	_
13	mífku	mífko	ADJ	_	Definite=Ind	14	amod	_	_
14	zájčo	zájek	NOUN	_	Case=Acc|Definite=Ind|Degree=Dim|Gender=Neut|Number=Sing	11	obj	_	SpaceAfter=No
15	»	»	PUNCT	_	_	11	punct	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


