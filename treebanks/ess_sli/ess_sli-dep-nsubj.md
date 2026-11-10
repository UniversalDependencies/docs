---
layout: base
title:  'Statistics of nsubj in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `nsubj`

This relation is universal.

173 nodes (12%) are attached to their parents as `nsubj`.

168 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61849710982659.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (156; 90% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (8; 5% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	neghtuq	negh	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=negh(V)^[Ind.Intr]^[3Sg]|Gloss=it-ate|MSeg=negh+tu+q
3	pagunghaghmeng	pagunghagh	NOUN	_	Case=Abl|Number=Sing	2	obl:mod	_	Analysis=pagunghagh*(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-crowberry|MSeg=pagunghagh+meng|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Kitum	kitu	PRON	_	Case=Erg|Number=Sing|PronType=Int	3	nsubj	_	Analysis=kitu(WH)^[Rel.Sg]|Gloss=who|MSeg=Kitu+m
2	qiya	qiya	VERB	_	_	3	xcomp	_	Analysis=qiya(V)|Gloss=to-cry
3	staten	st	VERB	_	Mood=Int|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Subcat=Tran	0	root	_	Analysis=+(te)ste(CmpdVbl)^[Intrg.Trns]^[3Sg.2Sg]|Gloss=to-make-one-V|MSeg=st+a+ten
4	?	?	PUNCT	_	_	3	punct	_	Analysis=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Panigten	panig	NOUN	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=2	2	nsubj	_	Analysis=panig(N)^[Abs.2SgPoss.Pl]|Gloss=your-daughters|MSeg=Panig+ten
2	aghnagha	aghnagha	NOUN	_	_	0	root	_	Analysis=aghnaghagh*(N)|Gloss=girl
3	ghllag	ghllag	NOUN	_	_	2	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
4	uut	u	X	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr	2	dep:cop	_	Analysis=~:(ng)u(N→V)^[Ind.Intr]^[3Pl]|Gloss=to-be-N|MSeg=u+u+t
5	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


