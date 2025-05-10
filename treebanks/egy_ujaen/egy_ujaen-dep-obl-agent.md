---
layout: base
title:  'Statistics of obl:agent in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="egy_ujaen-dep-obl-arg.html">obl:arg</a></tt>.

46 nodes (0%) are attached to their parents as `obl:agent`.

46 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (26; 57% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (20; 43% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl:agent	color:blue
1	wp(.w)	wpi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓄋|SPC=PastPass
2	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	1	nsubj:pass	_	Hiero=𓂋:𓏤|Hierocl=Yes
3	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP
4	ꞽn	ꞽn	ADP	_	_	5	case	_	Hiero=𓇋𓈖|Status=Cons
5	sꜣ	sꜣ	NOUN	_	Gender=Masc|Number=Sing	1	obl:agent	_	Hiero=𓅭
6	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Hiero=𓆑|Pron=SFP
7	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc	5	appos	_	Hiero=𓅃|Name=God
8	mr.y	mri̯	NOUN	_	Gender=Masc|Number=Sing|Tense=Past|VerbClass=3aeinf|VerbForm=Part|Voice=Pass	7	appos	_	Hiero=𓌹𓇋𓇋
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:agent	color:blue
1	šn(.w)	šni̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓍲:𓈖|SPC=PastPass
2	Śꜣḥ	Śꜣḥ	PROPN	_	Gender=Masc	1	nsubj:pass	_	Hiero=𓃃:𓇼|Hierocl=Yes|Name=God
3	ꞽn	ꞽn	ADP	_	_	4	case	_	Hiero=(𓇋*𓏎:)𓈖|Status=Cons
4	Ṭ(w)ꜣ.t	Ṭwꜣ.t	PROPN	_	Gender=Fem	1	obl:agent	_	Hiero=𓂧𓄿(𓏏:𓇽)|Hierocl=Yes|Name=Place
5	wꜥb	wꜥb	VERB	_	SubForm=Pred|Tense=Pres|VerbClass=3lit|VerbForm=Fin|Voice=Act	1	advcl	_	Hiero=UC_No𓂝𓃀|SPC=Pres
6	ꜥnḫ(.w)	ꜥnḫ	NOUN	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3lit|VerbForm=Part|Voice=Act	5	nsubj	_	Hiero=𓋹
7	m	m	ADP	_	Case=Loc	8	case	_	Hiero=𓅓|Status=Cons
8	ꜣḫ.t	ꜣḫ.t	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	Hiero=𓅜(𓏏:𓇿)|Hierocl=Yes

~~~


