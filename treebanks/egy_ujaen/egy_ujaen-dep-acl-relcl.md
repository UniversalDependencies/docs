---
layout: base
title:  'Statistics of acl:relcl in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-acl.html">acl</a></tt>.

138 nodes (1%) are attached to their parents as `acl:relcl`.

138 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60869565217391.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (123; 89% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
1	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	Hiero=𓂋
2	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	nmod	_	Hiero=𓎡|Poss=Yes|Pron=SFP
3	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Hiero=𓂋
4	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	3	amod	_	Hiero=𓈖|Nisba=Prep
5	bḥs	bḥs	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	Hiero=𓃀𓎛(𓊃:𓄑)𓃔|Hierocl=Yes
6	ꞽr(č).t	ꞽrč.t	NOUN	_	Gender=Fem	5	nmod:poss	_	Hiero=𓇋(𓂋:𓏏)𓏈|Hierocl=Yes
7	hrw	hrw	NOUN	_	AdvType=Tim|Gender=Masc|Number=Sing	3	obl	_	Hiero=𓇳
8	mś(.w)	mśi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	7	acl:relcl	_	Hiero=𓄟|SPC=PastPass
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj:pass	_	Hiero=𓆑|Pron=SFP
10	ꞽm	ꞽm	ADV	_	AdvType=Loc	8	advmod	_	Hiero=𓇋𓅓
11	|	|	PUNCT	_	_	12	punct	_	_|LINE
12	bṭ	bṭ	NOUN	_	Gender=Masc|Number=Sing	3	parataxis	_	Hiero=UC_14104
13	Mḥ.w	Mḥ.w	PROPN	_	Gender=Masc	12	nmod:poss	_	Hiero=𓇉|Name=Place
14	čꜣ	čꜣ	NOUN	_	Gender=Masc|Number=Sing	12	appos	_	Hiero=𓅷𓃉|Hierocl=Yes
15	5	5	NUM	_	_	14	nummod	_	CARD|Hiero=𓏾
16	Š.t	Š.t	PROPN	_	Gender=Fem	14	nmod:poss	_	Hiero=𓈙:𓏏|Name=Place
17	p.t	p.t	NOUN	_	Gender=Fem|Number=Sing	16	flat	_	Hiero=𓊪(:𓇯:𓏏)|Hierocl=Yes

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	fꜣ	fꜣi̯	VERB	_	Mood=Imp|Number=Sing|VerbClass=3aeinf	0	root	_	Hiero=𓆑:𓄿
2	ḥr	ḥr	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓁷|MWE=Yes
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nmod	_	Hiero=𓎡|Poss=Yes|Pron=SFP
4	hꜣ	hꜣ	INTJ	_	_	5	discourse	_	Hiero=𓉔𓄿
5	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	vocative	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
6	pw	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Dem|Hiero=𓊪𓅱
7	sꞽ	sꞽ	VERB	_	Gender=Masc|Number=Sing|SubForm=RelForm|Tense=Past|VerbForm=Fin	5	acl:relcl	_	Hiero=𓊄|Tense=Past-1
8	ꜣḫ	ꜣḫ	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	Hiero=𓅜
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	nꞽ	nꞽ	PART	_	PartType=Neg	0	root	_	Hiero=𓂜|Neg
2	śbꜣ	śbꜣ	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	Hiero=𓋴𓃀𓇼
3	nčr(.ꞽ)	nčr	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	Hiero=𓊹|Nisba=Noun|TransHon=Yes
4	ꞽw.tꞽ	ꞽw.tꞽ	PRON	_	Gender=Masc|Number=Sing|Polarity=Neg|PronType=Rel	5	expl	_	Hiero=𓇋𓅱𓂜𓍘
5	rmnw.tꞽ	rmnw.tꞽ	NOUN	_	Gender=Masc|Number=Sing	2	acl:relcl	_	Hiero=(UC_139C3:𓏌)𓍘
6	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP

~~~


