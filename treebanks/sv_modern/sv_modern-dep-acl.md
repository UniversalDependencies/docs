---
layout: base
title:  'Statistics of acl in UD_Swedish-Modern'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Modern: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="sv_modern-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="sv_modern-dep-acl-relcl.html">acl:relcl</a></tt>.

62 nodes (0%) are attached to their parents as `acl`.

62 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.46774193548387.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="sv_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (20; 32% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (15; 24% instances), <tt><a href="sv_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (10; 16% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (8; 13% instances), <tt><a href="sv_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sv_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	män	_	CCONJ	_	_	3	cc	_	Ref=MRK_14.49
2	thetta	_	PRON	_	_	3	nsubj	_	Ref=MRK_14.49
3	skeer	_	VERB	_	_	0	root	_	Ref=MRK_14.49
4	på	_	ADP	_	_	5	case	_	Ref=MRK_14.49
5	thet	_	PRON	_	_	3	obl	_	Ref=MRK_14.49
6	ath	_	SCONJ	_	_	9	mark	_	Ref=MRK_14.49
7	scrifftenar	_	NOUN	_	_	9	nsubj:pass	_	Ref=MRK_14.49
8	skola	_	AUX	_	_	9	aux:pass	_	Ref=MRK_14.49
9	fulboordas	_	VERB	_	_	5	acl	_	Ref=MRK_14.49
10	/	_	PUNCT	_	_	3	punct	_	ModernForm=.|Ref=MRK_14.49

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	then	_	PRON	_	_	9	dislocated	_	Ref=MRK_4.23
2	ther	_	PRON	_	Abbr=Yes	4	nsubj	_	Ref=MRK_4.23
3	öron	_	NOUN	_	_	4	obj	_	Ref=MRK_4.23
4	hafuer	_	VERB	_	_	1	acl:relcl	_	Ref=MRK_4.23
5	til	_	ADP	_	_	7	mark	_	Ref=MRK_4.23
6	ath	_	PART	_	_	7	mark	_	Ref=MRK_4.23
7	höra	_	VERB	_	_	3	acl	_	Ref=MRK_4.23
8	han	_	PRON	_	_	9	nsubj	_	Ref=MRK_4.23
9	höre	_	VERB	_	_	0	root	_	Ref=MRK_4.23
10	/	_	PUNCT	_	_	9	punct	_	ModernForm=.|Ref=MRK_4.23

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	Friya	_	ADJ	_	_	0	root	_	Ref=MRK_15.30
2	tigh	_	PRON	_	_	1	obj	_	Ref=MRK_15.30
3	sielffuan	_	ADJ	_	_	2	acl	_	Ref=MRK_15.30
4	/	_	PUNCT	_	_	6	punct	_	Ref=MRK_15.30
5	och	_	CCONJ	_	_	6	cc	_	Ref=MRK_15.30
6	stijgh	_	VERB	_	_	1	conj	_	Ref=MRK_15.30
7	nedher	_	ADV	_	_	6	advmod	_	Ref=MRK_15.30
8	vthaff	_	ADP	_	_	9	case	_	Ref=MRK_15.30
9	korsith	_	NOUN	_	_	6	obl	_	Ref=MRK_15.30
10	/	_	PUNCT	_	_	1	punct	_	ModernForm=.|Ref=MRK_15.30

~~~


