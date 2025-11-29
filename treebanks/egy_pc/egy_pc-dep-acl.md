---
layout: base
title:  'Statistics of acl in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="egy_ujaen-dep-acl-relcl.html">acl:relcl</a></tt>.

254 nodes (1%) are attached to their parents as `acl`.

254 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09055118110236.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (192; 76% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (49; 19% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	m	m	VERB	_	Mood=Imp|Number=Sing|VerbClass=Def|VerbForm=Fin	0	root	_	Hiero=𓌇
2	n	n	ADP	_	Case=Ben	3	case	_	Hiero=𓈖|Status=Pron
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Emp	1	obl	_	Hiero=𓎡|Pron=SFP
4	rč̣.w	rč̣.w	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=(𓂋:𓈋)𓅱UC_No|Hierocl=UC_No
5	pr.ꞽ	pri̯	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbClass=3aeinf|VerbForm=Part|Voice=Act	4	acl	_	ADJ=Yes|Hiero=(𓉐:𓂋)𓇋
6	ꞽm	m	ADP	_	Case=Ela	7	case	_	Hiero=𓇋𓅓|Status=Pron
7	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	obl	_	Hiero=𓎡|Pron=SFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	fꜣ	fꜣi̯	VERB	_	Mood=Imp|Number=Sing|VerbClass=3aeinf|VerbForm=Fin	0	root	_	Hiero=𓆑:𓄿
2	ḥr	ḥr	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓁷|MWE=Yes
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronType=Prs	2	nmod	_	Hiero=𓎡|Pron=SFP
4	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	vocative	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
5	pw	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	Hiero=𓊪𓅱
6	wꜣš	wꜣš	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3lit|VerbForm=Part|Voice=Act	4	acl	_	ADJ=Yes|Hiero=𓍯𓄿𓈙
7	śpṭ	śpṭ	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3lit|VerbForm=Part|Voice=Act	4	acl	_	ADJ=Yes|Hiero=𓋴𓇮𓂧
8	mꜣ	mꜣꜣ	VERB	_	Mood=Sub|VerbClass=2aered|VerbForm=Fin	1	advcl	_	Clause=Final|Hiero=𓌴:𓁹|Hierocl=𓁹|SPC=Sub
9	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	Hiero=𓎡|Pron=SFP
10	n	n	ADP	_	Case=Acc	11	case	_	Hiero=𓈖|Status=Cons
11	pr.t	pri̯	VERB	_	Gender=Fem|Nominal=Yes|Number=Sing|Tense=Past|VerbClass=3aeinf|VerbForm=Part|Voice=Act	8	obj	_	Hiero=𓉐:𓂋:𓏏
12	ꞽm	m	ADP	_	Case=Ela	13	case	_	Hiero=𓇋𓅓|Status=Pron
13	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	11	obl	_	Hiero=𓎡|Pron=SFP
14	ḥ(w)	ḥwi̯	VERB	_	Mood=Ind|SubForm=Pred|Tense=Pres|VerbClass=3aeinf|VerbForm=Fin|Voice=Act	8	advcl	_	Hiero=𓎛|SPC=Pres
15	⸗ś	ś	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Hiero=𓋴|Pron=SFP
16	śḫt	śḫt	VERB	_	Gender=Masc|Nominal=Yes|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	14	obj	_	Hiero=𓋴(𓐍:𓏏)
17	ꞽm	ꞽm	ADV	_	AdvType=Loc	16	advmod	_	Hiero=𓇋𓅓

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	ꞽꞽ.n	ꞽwi̯	VERB	_	Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=Anom|VerbForm=Fin|Voice=Act	0	root	_	Hiero=𓇍𓈖|SPC=Past-2
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	nsubj	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
3	mꜣ	mꜣꜣ	VERB	_	Mood=Sub|VerbClass=2aered|VerbForm=Fin	1	advcl	_	Hiero=(𓌴:𓁹)𓄿|Hierocl=𓁹|SPC=Sub
4	⸗čn	čn	PRON	_	Gender=Com|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Hiero=𓍿:𓈖|Pron=SFP
5	św	św	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	Hiero=𓇓𓅱|Pron=Dep
6	ḫpr(.w)	ḫpr	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbClass=3lit|VerbForm=Fin	5	acl	_	Hiero=(𓐍:𓊪)𓆣𓂋|OSSC=StatConv
7	m	m	ADP	_	Case=Equ	8	case	_	Hiero=𓅓|Status=Cons
8	nčr	nčr	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	Hiero=𓊹
9	ꜥꜣ	ꜥꜣi̯	ADJ	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3aeinf|VerbForm=Part|Voice=Act	8	compound	_	Hiero=𓉼

~~~


