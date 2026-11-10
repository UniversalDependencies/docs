---
layout: base
title:  'Statistics of advcl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_sequoia-dep-advcl-cleft.html">advcl:cleft</a></tt>.

617 nodes (1%) are attached to their parents as `advcl`.

365 instances of `advcl` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.9157212317666.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (437; 71% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (63; 10% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (35; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (34; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (24; 4% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	Exponence[Gender]=Inherent
2	Rousselot	Rousselot	PROPN	_	_	1	flat:name	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	insisté	insister	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Status[Tense]=Denom
5	pour	pour	ADP	_	_	7	mark	_	_
6	me	moi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
7	garder	garder	VERB	_	VerbForm=Inf	4	advcl	_	Subject=Instantiated
8	et	et	CCONJ	_	_	12	cc	_	_
9	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
10	l'	lui	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
11	en	en	PRON	_	Person=3|PronType=Prs	12	iobj	_	_
12	remercie	remercier	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advcl	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	14	14	NUM	_	ExtPos=PROPN|Number=Sing|NumType=Card	8	advcl	_	Exponence[Number]=Inherent
3	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent
4	2006	2006	NUM	_	ExtPos=PROPN|Number=Sing|NumType=Card	3	nmod	_	Exponence[Number]=Inherent|SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tribunal	tribunal	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	Exponence[Gender]=Inherent
8	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	10	det	_	_
10	décision	décision	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	Exponence[Gender]=Inherent|SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	S'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	SpaceAfter=No
2	agissant	agir	VERB	_	Tense=Pres|VerbForm=Part	13	advcl	_	Status[Tense]=Denom
3	de	de	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	maladie	maladie	NOUN	_	Gender=Fem|Number=Sing	2	obl:arg	_	Exponence[Gender]=Inherent
6	de	de	ADP	_	_	7	case	_	_
7	Paget	Paget	PROPN	_	Gender=Fem|Number=Sing	5	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
8	,	,	PUNCT	_	_	2	punct	_	_
9	Aclasta	Aclasta	PROPN	_	_	13	nsubj	_	_
10	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
11	été	être	AUX	_	Tense=Past|VerbForm=Part	13	cop	_	Status[Tense]=Denom
12	plus	plus	ADV	_	_	13	advmod	_	_
13	efficace	efficace	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent
14	que	que	SCONJ	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	risédronate	risédronate	NOUN	_	Gender=Masc|Number=Sing	13	dep	_	Exponence[Gender]=Inherent|SpaceAfter=No
17	.	.	PUNCT	_	_	13	punct	_	_

~~~


