---
layout: base
title:  'Statistics of advcl:consec in UD_Egyptian-PC'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-PC: Relations: `advcl:consec`

This relation is a language-specific subtype of <tt><a href="egy_pc-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="egy_pc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="egy_pc-dep-advcl-tcl.html">advcl:tcl</a></tt>.

21 nodes (0%) are attached to their parents as `advcl:consec`.

21 instances of `advcl:consec` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.85714285714286.

The following 2 pairs of parts of speech are connected with `advcl:consec`: <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (20; 95% instances), <tt><a href="egy_pc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advcl:consec	color:blue
1	ptr.n	ptr	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Act	0	root	_	Hiero=(𓊪:𓏏)(𓥻:𓂋)𓈖|ID=62900
2	čw	čw	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Dep|PronType=Prs	1	obj	_	Hiero=𓍿𓅱|ID=174900
3	(ꞽ)m(.ꞽw)	m	NOUN	_	Gender=Masc|Nisba=DePrep|Number=Plur	1	nsubj	_	Hiero=𓅓|ID=25130
4	ḫt	ḫt	NOUN	_	Gender=Masc|Number=Sing	3	nmod:nisba	_	Hiero=(𓸒:𓏏)|ID=858351|MWE=Yes
5	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronClass=Suffix|PronType=Prs	4	nmod	_	Hiero=𓆑|ID=10050
6	wr	wrr	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=Pred|Tense=Pres|VerbClass=2aered|VerbForm=Fin|Voice=Act	1	advcl	_	Hiero=(𓅨:𓂋)|ID=47270
7	pḥ.t(ꞽ)	pḥ.tꞽ	NOUN	_	Gender=Fem|Number=Dual	6	nsubj	_	Hiero=𓊪𓎛𓏏|ID=61400
8	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronClass=Suffix|PronType=Prs	7	nmod	_	Hiero=𓎡|ID=10110
9	ꞽr	r	ADP	_	Case=Cmp|StatPrep=Pron	10	case	_	Hiero=𓇋𓂋|ID=91904
10	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	6	obl	_	Hiero=𓆑|ID=10050
11	ꞽm	ꞽmi̯	AUX	_	Conjug=Suffix|Mood=Ind|SubForm=Pred|Tense=Fut|VerbClass=Def|VerbForm=Fin|VerbType=Aux	13	aux	_	Hiero=𓇋𓅓𓂜|ID=25170
12	⸗śn	śn	PRON	_	Gender=Com|Number=Plur|Person=3|PronClass=Suffix|PronType=Prs	13	nsubj	_	Hiero=𓋴𓈖|ID=10100
13	ẖꜣ.w	ẖꜣi̯	VERB	_	VerbClass=3aeinf|VerbForm=Conv	6	advcl:consec	_	Hiero=𓄡𓄿𓅱|ID=122350
14	kw	kw	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Dep|PronType=Prs	13	obj	_	Hiero=𓎡𓅱|ID=163890

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl:consec	color:blue
1	hꜣ	hꜣ	INTJ	_	_	2	discourse	_	Hiero=𓉔𓄿|ID=97240
2	Ppy	Ppy	PROPN	_	Gender=Masc|NameType=King	4	vocative	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺|ID=400313
3	pw	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	Hiero=𓊪𓅱|ID=59740
4	ꞽꞽ	ꞽwi̯	VERB	_	Aspect=Perf|Conjug=Suffix|Mood=Ind|Tense=Past|VerbClass=Anom|VerbForm=Fin|Voice=Act	0	root	_	Hiero=𓇍|ID=21930
5	ꞽꞽ	ꞽwi̯	VERB	_	Gender=Masc|Nominal=Yes|Number=Sing|Tense=Past|VerbClass=Anom|VerbForm=Part|Voice=Act	4	nsubj	_	Hiero=𓇍|ID=21930
6	nꞽ	nꞽ	PART	_	PartType=Neg	7	advmod:neg	_	Hiero=𓂜|ID=78890
7	gꜣ.w	gꜣu̯	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=Pred|Tense=Fut|VerbClass=3aeinf|VerbForm=Fin|Voice=Act	1	advcl:consec	_	Hiero=(𔍄:𓅱)|ID=166210
8	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	7	nsubj	_	Hiero=𓎡|ID=10110

~~~


