---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_lesbian-dep-nsubj.html">nsubj</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:pass`.

4 instances of `nsubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-DET.html">DET</a></tt> (2; 25% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nsubj:pass	color:blue
1	Σιγά	σιγά	ADV	_	ExtPos=ADV	5	advmod	_	_
2	τώρα	τώρα	ADV	_	_	1	advmod	_	_
3	π’	που	SCONJ	_	PronType=Rel	1	fixed	_	_
4	δε	δεν	PART	_	Polarity=Neg	5	advmod	_	_
5	ξέρουμι	ξέρου	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	τίλιγια	τίλιγια	ADV	_	PronType=Int	7	advmod	_	_
7	γ’νόντιν	γίνουμι	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	ccomp	_	_
8	τα	η	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	9	det	_	_
9	μουρά	μουρό	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj:pass	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubj:pass	color:blue
1	Η	η	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	πρόεδρος	πρόιδρους	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	τότε	τότι	ADV	_	_	2	acl:relcl	_	_
4	που	που	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
5	ήνταν	είμι	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	cop	_	Voicing=Voiced
6	είπε	λέγου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	δεν	δεν	PART	_	Polarity=Neg	9	advmod	_	_
8	θα	θα	AUX	_	Tense=Fut	9	aux	_	_
9	ανακατευτεί	ανακατεύγου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	6	ccomp	_	_
10	κανένας	κανένας	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	9	nsubj:pass	_	_
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Γιάνν’ς	Γιάννς	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj:pass	_	_
2	αλείβγιτι	αλείβου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	απ’	απού	ADP	_	_	5	case	_	_
4	του	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Γιώργ’	Γιώργς	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	2	obl:agent	_	_
6	,	,	PUNCT	_	_	10	punct	_	_
7	γι’	για	ADP	_	_	8	case	_	_
8	αυτό	αυτός	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl	_	_
9	δεν	δεν	PART	_	Polarity=Neg	10	advmod	_	_
10	ξικουλλά	ξικουλλώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
11	απί	απί	ADP	_	_	12	case	_	_
12	κουντά	κουντά	ADV	_	_	10	obl	_	_
13	τ’	μ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


