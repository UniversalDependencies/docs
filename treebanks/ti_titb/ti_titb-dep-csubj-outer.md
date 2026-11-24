---
layout: base
title:  'Statistics of csubj:outer in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="ti_titb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="ti_titb-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="ti_titb-dep-csubj-pass.html">csubj:pass</a></tt>.

13 nodes (1%) are attached to their parents as `csubj:outer`.

12 instances of `csubj:outer` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 3 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (9; 69% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (2; 15% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 csubj:outer	color:blue
1	እቲ	እቲ	DET	DET	Gender=Masc|Number=Sing|PronType=Art	3	det	_	Translit=ʔti
2	ዝ	ዝ	SCONJ	SCONJ	_	3	mark	_	_
3	ሓሸ	ሓሸ	VERB	VSTEM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	14	csubj:outer	_	Aimad=SERAHI
4	፡	፡	PUNCT	PUNCT	_	3	punct	_	_
5	ን	ን	ADP	ADP	_	6	case:pre	_	_
6	ነገር	ነገር	NOUN	NOUN	Number=Plur	8	obj	_	_
7	እና	እና	SCONJ	SCONJ	_	8	mark	_	_
8	ረኣኻ	ረኣየ	VERB	VSTEM	Aspect=Perf|Gender=Masc|Number=Sing|Person=2	14	advcl	_	Aimad=SERAHI
9	ከም	ከም	ADP	ADP	_	12	mark	_	_
10	ዝ	ዝ	SCONJ	SCONJ	_	12	mark	_	_
11	ኣይ	ኣይ	ADV	ADV	Polarity=Neg	12	advmod:aff	_	_
12	ርኣኻ	ረኣየ	VERB	VSTEM	Aspect=Perf|Gender=Masc|Number=Sing|Person=2	14	advcl	_	Aimad=SERAHI
13	ኰይንካ	ኮነ	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing|Person=2	12	aux	_	Translit=kwəynka
14	ምሕላፍ	ምሕላፍ	NOUN	NOUN	Number=Sing	0	root	_	Translit=mħlaf
15	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	14	cop	_	Translit=ʔyu
16	።	።	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj:outer	color:blue
1	ኣብ	ኣብ	ADP	ADP	_	2	case	_	Translit=ʔab
2	ዱር	ዱር	NOUN	NOUN	Number=Sing	3	obl	_	Translit=dur
3	ምዝውዋር	ምዝውዋር	NOUN	NOUN	Number=Sing	10	csubj:outer	_	Translit=mzwwar
4	፡	፡	PUNCT	PUNCT	_	3	punct	_	_
5	ናይ	ናይ	ADP	ADP	_	6	case	_	Translit=nay
6	ተፈጥሮ	ተፈጥሮ	NOUN	NOUN	Number=Sing	7	nmod	_	Translit=təfət'ro
7	ጽባቐ	ጽባቐ	NOUN	NOUN	Number=Sing	10	obj	_	Translit=s'bax'ə
8	ብ	ብ	ADP	ADP	_	9	case:pre	_	_
9	ጋህዲ	ጋህዲ	NOUN	NOUN	Number=Sing	10	obl	_	_
10	ምርኣይ	ምርኣይ	NOUN	NOUN	Number=Sing	0	root	_	Translit=mrʔay
11	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	10	cop	_	Translit=ʔyu
12	።	።	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj:outer	color:blue
1	ዝ	ዝ	SCONJ	SCONJ	_	2	mark	_	_
2	ኣስተውዓልኩዎ	ኣስተውዓለ	VERB	VSTEM	Aspect=Perf|Gender[obj]=Masc|Number=Sing|Number[obj]=Sing|Person=1|Person[obj]=3|Voice=Cau	8	csubj:outer	_	Aimad=ASRAHI
3	ሰባት	ሰብ	NOUN	NOUN	Number=Plur	8	nsubj	_	Translit=səbat
4	ሕጕሳት	ሕጕስ	NOUN	NOUN	Number=Plur	8	xcomp:pred	_	Translit=ħgwsat
5	ከም	ከም	ADP	ADP	_	8	mark	_	_
6	ዝ	ዝ	SCONJ	SCONJ	_	8	mark	_	_
7	ኣይ	ኣይ	ADV	ADV	Polarity=Neg	8	advmod:aff	_	_
8	ይኾኑ	ኮነ	VERB	VSTEM	Aspect=Imp|Gender=Masc|Number=Plur|Person=3	0	root	_	Aimad=SERAHI
9	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	8	cop	_	Translit=ʔyu
10	።	።	PUNCT	PUNCT	_	8	punct	_	_

~~~


