---
layout: base
title:  'Statistics of nsubj in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `nsubj`

This relation is universal.

173 nodes (7%) are attached to their parents as `nsubj`.

168 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60693641618497.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (156; 90% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (8; 5% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Kitu	kitu	PRON	_	PronType=Int	4	nsubj	_	Analysis=kitu(WH)|Gloss=who
2	m	m	X	_	Case=Erg|Number=Sing	1	dep:infl	_	Analysis=[Rel.Sg]
3	qiya	qiya	VERB	_	_	4	xcomp	_	Analysis=qiya(V)|Gloss=to-cry
4	st	st	VERB	_	_	0	root	_	Analysis=+(te)ste(CmpdVbl)|Gloss=to-make-one-V
5	a	a	X	_	Mood=Int|Subcat=Tran	4	dep:infl	_	Analysis=[Intrg.Trns]
6	ten	ten	X	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3	4	dep:infl	_	Analysis=[3Sg.2Sg]
7	?	?	PUNCT	_	_	4	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Panig	panig	NOUN	_	_	3	nsubj	_	Analysis=panig(N)|Gloss=daughter
2	ten	ten	X	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=2	1	dep:infl	_	Analysis=[Abs.2SgPoss.Pl]
3	aghnagha	aghnagha	NOUN	_	_	0	root	_	Analysis=aghnaghagh*(N)|Gloss=girl
4	ghllag	ghllag	NOUN	_	_	3	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
5	u	u	VERB	_	_	3	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
6	u	u	X	_	Mood=Ind|Subcat=Intr	5	dep:infl	_	Analysis=[Ind.Intr]
7	t	t	X	_	Number[subj]=Plur|Person[subj]=3	5	dep:infl	_	Analysis=[3Pl]
8	.	.	PUNCT	_	_	3	punct	_	Analysis=.

~~~


