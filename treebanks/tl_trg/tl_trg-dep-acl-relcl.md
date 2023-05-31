---
layout: base
title:  'Statistics of acl:relcl in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `acl:relcl`

This relation is a language-specific subtype of .

3 nodes (0%) are attached to their parents as `acl:relcl`.

3 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tl_trg-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Sino	sino	PRON	_	Case=Nom|PronType=Int	0	root	_	Gloss=who
2	ang	ang	ADP	_	Case=Nom	3	case	_	Gloss=the|MGloss=PIV
3	batang	bata	NOUN	_	Link=Yes	1	nsubj	_	Gloss=child|MSeg=bata-ng|MGloss=child-LINK
4	pumunta	punta	VERB	_	Aspect=Perf|Mood=Ind|Voice=Act	3	acl:relcl	_	Gloss=went
5	sa	sa	ADP	_	Case=Dat	6	case	_	Gloss=to
6	tindahan	tindahan	NOUN	_	_	4	obl	_	Gloss=store|SpaceAfter=No
7	?	?	PUNCT	_	_	1	punct	_	Gloss=?

~~~


