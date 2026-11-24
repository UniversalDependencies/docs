---
layout: base
title:  'Statistics of punct in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `punct`

This relation is universal.

310 nodes (21%) are attached to their parents as `punct`.

309 instances of `punct` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04516129032258.

The following 4 pairs of parts of speech are connected with `punct`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (295; 95% instances), <tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (9; 3% instances), <tt><a href="ess_sli-pos-PRON.html">PRON</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (4; 1% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 punct	color:blue
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2	neghtuq	negh	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=negh(V)^[Ind.Intr]^[3Sg]|Gloss=it-ate|MSeg=negh+tu+q
3	pagunghaghmeng	pagunghagh	NOUN	_	Case=Abl|Number=Sing	2	obl:mod	_	Analysis=pagunghagh*(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-crowberry|MSeg=pagunghagh+meng|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Panigten	panig	NOUN	_	Case=Abs|Number=Plur|Number[psor]=Sing|Person[psor]=2	2	nsubj	_	Analysis=panig(N)^[Abs.2SgPoss.Pl]|Gloss=your-daughters|MSeg=Panig+ten
2	aghnagha	aghnagha	NOUN	_	_	0	root	_	Analysis=aghnaghagh*(N)|Gloss=girl
3	ghllag	ghllag	NOUN	_	_	2	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
4	uut	u	X	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr	2	dep:cop	_	Analysis=~:(ng)u(N→V)^[Ind.Intr]^[3Pl]|Gloss=to-be-N|MSeg=u+u+t
5	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Kina	kina	PRON	_	PronType=Int	0	root	_	Analysis=kina(WH)|Gloss=who
2	nguzin	ngu	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	1	dep:cop	_	Analysis=~:(ng)u(N→V)^[Intrg.Intr.2Sg]|Gloss=to-be-N|MSeg=ngu+zin
3	?	?	PUNCT	_	_	1	punct	_	Analysis=?

~~~


