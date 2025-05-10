---
layout: base
title:  'Statistics of acl in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="egy_ujaen-dep-acl-relcl.html">acl:relcl</a></tt>.

237 nodes (1%) are attached to their parents as `acl`.

237 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.12236286919831.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (183; 77% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (46; 19% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	smꞽn	smꞽn	NOUN	_	_	2	nsubj	_	Hiero=𓊃𓅓𓏇𓈖
2	smꞽn	smꞽn	NOUN	_	_	0	root	_	Hiero=𓊃𓅓𓏇𓈖
3	wpp	wpi̯	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3aeinf|VerbForm=Part	2	acl	_	ADJ|Hiero=𓅱(𓄋:𓊪*𓊪)
4	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Hiero=𓂋
5	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	nmod	_	Hiero=𓎡|Poss=Yes|Pron=SFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	ꞽn	ꞽn	PART	_	PartType=Emp	2	discourse	_	Hiero=𓇋:𓈖
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	0	root	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
3	č̣ṭ	č̣ṭ	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=2lit|VerbForm=Part|Voice=Act	2	acl	_	ADJ|Hiero=𓆓:𓂧
4	ꞽm.t	m	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	3	obj	_	Hiero=𓇋𓏶𓏏|Nisba=Prep
5	ꞽb	ꞽb	NOUN	_	Gender=Masc|Number=Sing	4	compound	_	Hiero=𓄣|MWE=Yes
6	Wr.t	Wr.t	PROPN	_	Gender=Fem	5	nmod:poss	_	Hiero=𓅨:𓂋:𓏏|Name=Epith
7	m	m	ADP	_	Case=Tem	8	case	_	Hiero=𓅓|Status=Cons
8	ḥꜣb	ḥꜣb	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	Hiero=𓉲:𓎱|Hierocl=Yes
9	ꞽnś	ꞽnś.ꞽ	NOUN	_	Gender=Masc|Number=Sing	8	nmod:poss	_	Hiero=𓇋𓈖𓋴𓋳|Hierocl=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	ꞽꞽ.n	ꞽwi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=Anom|VerbForm=Fin|Voice=Act	0	root	_	Hiero=𓇍𓈖|SPC=Past-2
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	nsubj	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
3	mꜣ	mꜣꜣ	VERB	_	Mood=Sub|VerbClass=2aered	1	advcl	_	Hiero=(𓌴:𓁹)𓄿|SPC=Sub
4	⸗čn	čn	PRON	_	Gender=Com|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Hiero=𓍿:𓈖|Pron=SFP
5	św	św	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	Hiero=𓇓𓅱|Pron=Dep
6	ḫpr(.w)	ḫpr	VERB	_	Gender=Masc|Number=Sing|Person=3|VerbClass=3lit|VerbForm=Fin	5	acl	_	Hiero=(𓐍:𓊪)𓆣𓂋|OSSC=StatConv
7	m	m	ADP	_	Case=Equ	8	case	_	Hiero=𓅓|Status=Cons
8	nčr	nčr	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	Hiero=𓊹
9	ꜥꜣ	ꜥꜣi̯	ADJ	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=3aeinf|VerbForm=Part|Voice=Act	8	compound	_	Hiero=𓉼

~~~


