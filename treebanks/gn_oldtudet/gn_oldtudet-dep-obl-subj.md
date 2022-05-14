---
layout: base
title:  'Statistics of obl:subj in UD_Guarani-OldTuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guarani-OldTuDeT: Relations: `obl:subj`

This relation is a language-specific subtype of <tt><a href="gn_oldtudet-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gn_oldtudet-dep-obl-obj.html">obl:obj</a></tt>.

11 nodes (5%) are attached to their parents as `obl:subj`.

10 instances of `obl:subj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90909090909091.

The following 5 pairs of parts of speech are connected with `obl:subj`: <tt><a href="gn_oldtudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gn_oldtudet-pos-PRON.html">PRON</a></tt> (4; 36% instances), <tt><a href="gn_oldtudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gn_oldtudet-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="gn_oldtudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gn_oldtudet-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="gn_oldtudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gn_oldtudet-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="gn_oldtudet-pos-PRON.html">PRON</a></tt>-<tt><a href="gn_oldtudet-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:subj	color:blue
1	evokoi	evokoi	PRON	pron	Emph=Yes|PronType=Dem	4	obl:subj	_	_
2	katu	katu	ADV	_	_	4	advmod	_	_
3	ojapo	apo	VERB	_	Number[subj]=Sing|Person[subj]=3	4	dep	_	_
4	kuaa	kuaa	VERB	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:subj	color:blue
1	ava	ava	NOUN	n	_	0	root	_	_
2	verami	verami	PART	pcl	_	1	discourse	_	_
3	ukui	ukui	PRON	pro	_	1	obl:subj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:subj	color:blue
1	ãng	ãng	DET	dem	_	3	det	_	_
2	mbohapy	mbohapy	NUM	num	NumType=Card	3	nummod	_	_
3	personas	persona	NOUN	_	_	4	obl:subj	_	_
4	oiko'e	iko'e	VERB	v	Number[subj]=Sing|Person[subj]=3	0	root	_	_
5	ojohugui	_	ADP	posp	Reflex=Yes	4	obl	_	_

~~~


