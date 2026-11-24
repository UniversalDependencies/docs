---
layout: base
title:  'Statistics of obj in UD_Yupik-SLI'
udver: '2'
---

## Treebank Statistics: UD_Yupik-SLI: Relations: `obj`

This relation is universal.

121 nodes (8%) are attached to their parents as `obj`.

62 instances of `obj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46280991735537.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (116; 96% instances), <tt><a href="ess_sli-pos-X.html">X</a></tt>-<tt><a href="ess_sli-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ess_sli-pos-VERB.html">VERB</a></tt>-<tt><a href="ess_sli-pos-PRON.html">PRON</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Kaamgek	kaamg	NOUN	_	Case=Abs|Number=Dual	2	obj	_	Analysis=kameg(N)^[Abs.Du]|Gloss=skin-boot|MSeg=Kaamg+ek
2	iflaak	ifla	VERB	_	Mood=Ind|Number[obj]=Dual|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran	0	root	_	Analysis=ifla(V)^[Ind.Trns]^[3Sg.3Du]|Gloss=he-lost-them|MSeg=ifla+a+k|SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obj	color:blue
1	Nanevgaq	nanevgaq	NOUN	_	Case=Abs|Number=Sing	4	nsubj	_	Analysis=nanevgagh(N)^[Abs.Sg]|Gloss=the-old-man
2	qii	qii	NOUN	_	_	4	obj	_	Analysis=qiighw(N)|Gloss=grey-hair
3	ghwlla	ghwlla	NOUN	_	_	2	nmod	_	Analysis=–ghllag(N→N)|Gloss=big-N
4	lguuq	lgu	X	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr	0	root	_	Analysis=–lgu(N→V)^[Ind.Intr]^[3Sg]|Gloss=to-have-N|MSeg=lgu+u+q
5	.	.	PUNCT	_	_	4	punct	_	Analysis=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Sameng	sameng	PRON	_	PronType=Int	2	obj	_	Analysis=sameng(WH)|Gloss=what
2	neghe	neghe	VERB	_	_	0	root	_	Analysis=neghe(V)|Gloss=to-eat
3	lleqesta	lleqe	X	_	Mood=Int|Number[subj]=Plur|Person[subj]=1|Subcat=Intr|Tense=Fut	2	dep:aux	_	Analysis=@lleqe(V→V)^[Intrg.Intr]^[1Pl]|Gloss=will-V|MSeg=lleqe+st+a
4	unaami	unaami	PART	_	_	2	advmod	_	Analysis=unaami(PTCL)|Gloss=tomorrow|SpaceAfter=No
5	?	?	PUNCT	_	_	2	punct	_	Analysis=?

~~~


