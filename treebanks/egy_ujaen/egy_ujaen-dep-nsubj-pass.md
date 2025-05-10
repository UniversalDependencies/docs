---
layout: base
title:  'Statistics of nsubj:pass in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-outer.html">nsubj:outer</a></tt>.

197 nodes (1%) are attached to their parents as `nsubj:pass`.

197 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34010152284264.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (147; 75% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (31; 16% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (19; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	mś(.w)	mśi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓄟|SPC=PastPass
2	n	n	ADP	_	Case=Ben	3	case	_	Hiero=𓈖|Status=Pron
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	obl	_	Hiero=𓎡|Pron=SFP
4	pf	pf	NOUN	_	Gender=Masc|Number=Sing|PronType=Dem	1	nsubj:pass	_	Dem|Hiero=𓊪:𓆑
5	ꞽwr(.w)	ꞽwr	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Pass	1	parataxis	_	Hiero=𓃛:𓂋|SPC=PastPass
6	n	n	ADP	_	Case=Ben	7	case	_	Hiero=𓈖|Status=Pron
7	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	obl	_	Hiero=𓎡|Pron=SFP
8	pn	pn	NOUN	_	Gender=Masc|Number=Sing|PronType=Dem	5	nsubj:pass	_	Dem|Hiero=𓊪:𓈖

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	ꞽwꞽ(.w)	ꞽwr	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓃛𓇋|SPC=PastPass
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	nsubj:pass	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
3	m	m	ADP	_	Case=Tem	4	case	_	Hiero=𓅓|Status=Cons
4	grḥ	grḥ	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	Hiero=(𓎼:𓂋)𓎛𓇰|Hierocl=Yes
5	mś(.w)	mśi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	1	parataxis	_	Hiero=𓄟|SPC=PastPass
6	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	5	nsubj:pass	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
7	m	m	ADP	_	Case=Tem	8	case	_	Hiero=𓅓|Status=Cons
8	grḥ	grḥ	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	Hiero=(𓎼:𓂋)𓎛𓇰|Hierocl=Yes

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nsubj:pass	color:blue
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


