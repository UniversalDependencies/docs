---
layout: base
title:  'Statistics of advcl:purp in UD_Egyptian-PC'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-PC: Relations: `advcl:purp`

This relation is a language-specific subtype of <tt><a href="egy_pc-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="egy_pc-dep-advcl-consec.html">advcl:consec</a></tt>, <tt><a href="egy_pc-dep-advcl-tcl.html">advcl:tcl</a></tt>.

456 nodes (1%) are attached to their parents as `advcl:purp`.

456 instances of `advcl:purp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.23684210526316.

The following 4 pairs of parts of speech are connected with `advcl:purp`: <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (448; 98% instances), <tt><a href="egy_pc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="egy_pc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl:purp	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓|ID=185810
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃|ID=78150
3	č̣.n	rč̣i̯	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=Pred|Tense=Past|VerbClass=Anom|VerbForm=Fin|Voice=Act	1	ccomp:speech	_	Hiero=𓏙𓈖|ID=872594
4	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronClass=Suffix|PronType=Prs	3	nsubj	_	Hiero=No|ID=10030_Add
5	<n>	n	ADP	_	Case=Dat|StatPrep=Pron	6	case	_	Hiero=No|ID=400055_Emend
6	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	3	obl:arg	_	Hiero=𓆑|ID=10050
7	ꞽr.t(ꞽ)	ꞽr.t	NOUN	_	Gender=Fem|Number=Dual	3	obj	_	Hiero=(𓁹:𓁹)|ID=28250
8	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronClass=Suffix|PronType=Prs	7	nmod	_	Hiero=𓆑|ID=10050
9	ḥtp	ḥtp	VERB	_	Conjug=Suffix|Mood=Sub|VerbClass=3lit|VerbForm=Fin	3	advcl:purp	_	Hiero=(𓊵:𓏏)|ID=111230
10	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	9	nsubj	_	Hiero=𓆑|ID=10050
11	|	|	PUNCT	_	_	12	punct	_	ID=.|LINE=Punct
12	ḥtp	ḥtp	NOUN	_	Gender=Masc|Number=Sing	1	parataxis	_	Hiero=(𓊵:UC_No)|Hierocl=UC_No|ID=111220

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 advcl:purp	color:blue
1	č̣bꜥ(.w)	č̣bꜥ	NOUN	_	Gender=Masc|Number=Plur	5	nsubj	_	Hiero=(𓆓:𓃀)𓂝𓂭𓂭𓂭|Hierocl=𓂭𓂭𓂭|ID=183430
2	Ttꞽ	Ttꞽ	PROPN	_	Gender=Masc|NameType=King	1	nmod:poss	_	Hiero=𓍹(𓏏:𓏏)𓇋𓍺|ID=450656
3	ḥr.(ꞽ)w	ḥr	ADJ	_	Gender=Masc|Nisba=DePrep|Number=Plur	1	amod	_	Hiero=(𓁷:𓂋)𓅱|ID=108300
4	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	3	obl	_	Hiero=𓎡|ID=10110
5	č̣bꜥ(.w)	č̣bꜥ	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Hiero=(𓆓:𓃀)𓂝𓂭𓂭𓂭|Hierocl=𓂭𓂭𓂭|ID=183430
6	Mꜣfṭ.t	Mꜣfṭ.t	PROPN	_	Gender=Fem|NameType=God	5	nmod:poss	_	Hiero=(𓌴:𓁹)(𓆑:𓂧:𓏏)𓅆|Hierocl=𓅆|ID=67110
7	ḥr.t	ḥr	ADJ	_	Gender=Fem|Nisba=DeNom|Number=Sing	6	amod	_	Hiero=𓁷𓏏|ID=108300
8	ꞽb	ꞽb	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	Hiero=𓄣|ID=23290|MWE=Yes
9	ḥw.t	ḥw.t	NOUN	_	Gender=Fem|Number=Sing	8	nmod:poss	_	Hiero=𓽕(𓏏:𓉐)|Hierocl=𓉐|ID=99790
10	ꜥnḫ	ꜥnḫ	NOUN	_	Gender=Masc|Number=Sing	9	compound	_	Hiero=𓋹|ID=38540
11	tf	tf	VERB	_	Conjug=Suffix|Mood=Sub|VerbClass=2lit|VerbForm=Fin	6	advcl:purp	_	Hiero=(𓏏:𓆑)𓦓|Hierocl=𓦓|ID=171740
12	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	11	nsubj	_	Hiero=𓎡|ID=10110

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 advcl:purp	color:blue
1	ꞽn.y	ꞽn.w	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Hiero=(𓇋𓏎:𓈖)𓇋𓇋|ID=27050
2	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronClass=Suffix|PronType=Prs	1	nmod	_	Hiero=No|ID=10030_Add
3	ꜣ	ꜣ	PART	_	PartType=Mod	1	discourse	_	Hiero=𓄿|ID=2
4	ꞽpw	pw	DET	_	Gender=Masc|Number=Plur|PronType=Dem	1	nsubj	_	Hiero=𓇋𓊪𓅱|ID=24370
5	mr(r)	mri̯	VERB	_	Gender=Masc|Number=Plur|Tense=Pres|VerbClass=3aeinf|VerbForm=Part	1	acl	_	Hiero=𓌸(𓂋:𓈘)|Hierocl=𓈘|ID=72470
6	Ttꞽ	Ttꞽ	PROPN	_	Gender=Masc|NameType=King	5	obj	_	Hiero=𓍹(𓏏:𓏏)𓇋𓍺|ID=450656
7	ꞽn(n).w	ꞽni̯	VERB	_	Gender=Masc|Number=Plur|Tense=Pres|VerbClass=Anom|VerbForm=Part	5	conj	_	Hiero=(𓇋𓏎:𓈖)𓏌𓅱𓅱𓅱|ID=26870
8	w(ꞽ)	wꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronClass=Dep|PronType=Prs	7	obj	_	Hiero=𓅱|ID=44000
9	r	r	ADP	_	Case=All|StatPrep=Cons	10	case	_	Hiero=𓂋|ID=91901
10	ḥtp(.w)	ḥtp	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	Hiero=𓊵(𓏏:𓊪)|ID=400524
11	ꞽnt	ꞽni̯	VERB	_	Conjug=Suffix|Mood=Sub|VerbClass=Anom|VerbForm=Fin	1	advcl:purp	_	Hiero=𓇋𓏎(𓈖:𓏏)|ID=26870
12	⸗śn	śn	PRON	_	Gender=Com|Number=Plur|Person=3|PronClass=Suffix|PronType=Prs	11	nsubj	_	Hiero=𓋴𓈖|ID=10100
13	Ttꞽ	Ttꞽ	PROPN	_	Gender=Masc|NameType=King	11	obj	_	Hiero=𓍹(𓏏:𓏏)𓇋𓍺|ID=450656
14	r	r	ADP	_	Case=All|StatPrep=Cons	15	case	_	Hiero=𓂋|ID=91901
15	ḥtp(.w)	ḥtp	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	Hiero=𓊵(𓏏:𓊪)|ID=400524

~~~


