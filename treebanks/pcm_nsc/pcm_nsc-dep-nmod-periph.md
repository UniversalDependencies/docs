---
layout: base
title:  'Statistics of nmod:periph in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:periph`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="pcm_nsc-dep-nmod-emph.html">nmod:emph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

16 nodes (0%) are attached to their parents as `nmod:periph`.

16 instances of `nmod:periph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.625.

The following 8 pairs of parts of speech are connected with `nmod:periph`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (4; 25% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (4; 25% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 nmod:periph	color:blue
1	#	#	X	_	_	9	dep	_	AlignBegin=167560|AlignEnd=168740|Gloss=PUNCT
2	for	for	ADP	_	_	3	case	_	AlignBegin=168740|AlignEnd=168990|Gloss=for
3	jolijoli	jolijoli	NOUN	_	_	9	nmod:periph	_	AlignBegin=168990|AlignEnd=169642|Gloss=enjoyment
4	<	<	X	_	_	3	dep	_	AlignBegin=169642|AlignEnd=169672|Gloss=PUNCT
5	#	#	X	_	_	3	dep	_	AlignBegin=169672|AlignEnd=169837|Gloss=PUNCT
6	{	{	X	_	_	9	dep	_	AlignBegin=169672|AlignEnd=169837|Gloss=PUNCT
7	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=169837|AlignEnd=170010|Gloss=PL.1.POSS
8	Naija	Naija	PROPN	_	_	9	nmod	_	AlignBegin=170010|AlignEnd=170438|Gloss=Naija
9	rapper	rapper	NOUN	_	_	0	root	_	AlignBegin=170438|AlignEnd=170870|Gloss=rapper
10	|a	|a	X	_	_	11	dep	_	AlignBegin=170900|AlignEnd=171290|Gloss=PUNCT
11	Eva	Eva	PROPN	_	_	9	appos	_	AlignBegin=170900|AlignEnd=171290|Gloss=Eva
12	Allordiah	Allordiah	PROPN	_	_	11	flat	_	AlignBegin=171290|AlignEnd=171770|Gloss=Allordiah
13	}	}	X	_	_	9	dep	_	AlignBegin=171770|AlignEnd=171800|Gloss=PUNCT
14	//	//	X	_	_	9	dep	_	AlignBegin=171770|AlignEnd=171800|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:periph	color:blue
1	dis	dis	DET	_	Number=Sing|PronType=Dem	2	det	_	AlignBegin=115300|AlignEnd=115503|Gloss=SG.DEM
2	morning	morning	NOUN	_	_	4	nmod:periph	_	AlignBegin=115503|AlignEnd=115707|Gloss=morning
3	<	<	X	_	_	2	dep	_	AlignBegin=115707|AlignEnd=115707|Gloss=PUNCT
4	wetin	wetin	PRON	_	PronType=Int	0	root	_	AlignBegin=115707|AlignEnd=115910|Gloss=what.Q
5	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	AlignBegin=115910|AlignEnd=116113|Gloss=NOM.2
6	eat	eat	VERB	_	_	4	advcl:cleft	_	AlignBegin=116113|AlignEnd=116317|Gloss=eat
7	before	before	ADP	_	_	9	mark	_	AlignBegin=116317|AlignEnd=116520|Gloss=before
8	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=116520|AlignEnd=116723|Gloss=NOM.2
9	come	come	VERB	_	_	6	advcl	_	AlignBegin=116723|AlignEnd=116927|Gloss=come
10	here	here	ADV	_	_	9	obl:arg	_	AlignBegin=116927|AlignEnd=117130|Gloss=here
11	?//	?//	X	_	_	4	dep	_	AlignBegin=117130|AlignEnd=117130|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:periph	color:blue
1	under	under	ADP	_	_	3	case	_	AlignBegin=345207|AlignEnd=345727|Gloss=under
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	AlignBegin=345727|AlignEnd=345967|Gloss=SG.DEM
3	government	government	NOUN	_	_	4	nmod:periph	_	AlignBegin=345967|AlignEnd=346545|Gloss=government
4	naa	naa	X	_	_	0	root	_	AlignBegin=346575|AlignEnd=346837|Gloss=X|Lang=yo
5	ni	ni	PART	_	_	4	flat:foreign	_	AlignBegin=346837|AlignEnd=347017|Gloss=FOC|Lang=yo
6	olorun	olorun	X	_	_	5	flat:foreign	_	AlignBegin=347047|AlignEnd=347357|Gloss=X|Lang=yo
7	ma	ma	X	_	_	6	flat:foreign	_	AlignBegin=347357|AlignEnd=347517|Gloss=X|Lang=yo
8	wa	X	X	_	_	7	flat:foreign	_	AlignBegin=347517|AlignEnd=347687|Gloss=X|Lang=yo
9	saanu	saanu	X	_	_	8	flat:foreign	_	AlignBegin=347687|AlignEnd=348047|Gloss=X|Lang=yo
10	wa	X	X	_	_	9	flat	_	AlignBegin=348047|AlignEnd=348210|Gloss=X|Lang=yo
11	//	//	X	_	_	4	dep	_	AlignBegin=348210|AlignEnd=348240|Gloss=PUNCT

~~~


