---
layout: base
title:  'Statistics of acl:relcl in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-acl.html">acl</a></tt>.

155 nodes (1%) are attached to their parents as `acl:relcl`.

155 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58064516129032.

The following 6 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (133; 86% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
1	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	Hiero=𓂋
2	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronType=Prs	1	nmod	_	Hiero=𓎡|Pron=SFP
3	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Hiero=𓂋
4	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	3	amod	_	Hiero=𓈖|Nisba=DePrep
5	bḥs	bḥs	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	Hiero=𓃀𓎛(𓊃:𓄑)𓃔|Hierocl=𓃔
6	ꞽr(č).t	ꞽrč.t	NOUN	_	Gender=Fem	5	nmod:poss	_	Hiero=𓇋(𓂋:𓏏)𓏈|Hierocl=𓏈
7	hrw	hrw	NOUN	_	AdvType=Tim|Gender=Masc|Number=Sing	3	obl	_	Hiero=𓇳
8	mś(.w)	mśi̯	VERB	_	Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	7	acl:relcl	_	Hiero=𓄟|SPC=PastPass
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj:pass	_	Hiero=𓆑|Pron=SFP
10	ꞽm	ꞽm	ADV	_	AdvType=Loc	8	advmod	_	Hiero=𓇋𓅓
11	|	|	PUNCT	_	_	12	punct	_	LINE=Punct
12	bṭ	bṭ	NOUN	_	Gender=Masc|Number=Sing	3	parataxis	_	Hiero=UC_14104
13	Mḥ.w	Mḥ.w	PROPN	_	Gender=Masc	12	nmod:poss	_	Hiero=𓇉|Name=Place
14	čꜣ	čꜣ	NOUN	_	Gender=Masc|Number=Sing	12	appos	_	Hiero=𓅷𓃉|Hierocl=𓃉
15	5	5	NUM	_	NumType=Card	14	nummod	_	Hiero=𓏾
16	Š.t	Š.t	PROPN	_	Gender=Fem	14	nmod:poss	_	Hiero=𓈙:𓏏|Name=Place
17	p.t	p.t	NOUN	_	Gender=Fem|Number=Sing	16	flat	_	Hiero=𓊪(:𓇯:𓏏)|Hierocl=𓇯

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	fꜣ	fꜣi̯	VERB	_	Mood=Imp|Number=Sing|VerbClass=3aeinf|VerbForm=Fin	0	root	_	Hiero=𓆑:𓄿
2	ḥr	ḥr	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓁷|MWE=Yes
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronType=Prs	2	nmod	_	Hiero=𓎡|Pron=SFP
4	hꜣ	hꜣ	INTJ	_	_	5	discourse	_	Hiero=𓉔𓄿
5	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	vocative	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
6	pw	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Hiero=𓊪𓅱
7	sꞽ	sꞽ	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|SubForm=RelForm|Tense=Past|VerbForm=Fin	5	acl:relcl	_	Hiero=𓊄|SPC=Past-1
8	ꜣḫ	ꜣḫ	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	Hiero=𓅜
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	Hiero=𓆑|Pron=SFP

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	mr.y	mri̯	VERB	_	Gender=Masc|Nominal=Yes|Number=Sing|Tense=Past|VerbClass=3aeinf|VerbForm=Part|Voice=Pass	0	root	_	Hiero=𓌸𓇋𓇋
2	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	nmod	_	Hiero=No|Pron=SFP
3	pw	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	1	nsubj	_	Hiero=𓊪𓅱
4	ḥtp.n	ḥtp	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3lit|VerbForm=Fin	1	acl:relcl	_	Hiero=(𓊵:𓏏𓊪)𓈖|SPC=Past-2
5	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Hiero=No|Pron=SFP
6	ḥr	ḥr	ADP	_	Case=Cau	7	case	_	Hiero=𓁷:𓂋|Status=Pron
7	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	_	Hiero=𓆑|Pron=SFP

~~~


