---
layout: base
title:  'Statistics of nmod in UD_Bengali-BRU'
udver: '2'
---

## Treebank Statistics: UD_Bengali-BRU: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bn_bru-dep-nmod-poss.html">nmod:poss</a></tt>.

4 nodes (1%) are attached to their parents as `nmod`.

3 instances of `nmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bn_bru-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	মজার	মজা	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	Translit=majāra|LTranslit=majā
2	গল্পটি	গল্প	NOUN	_	Case=Nom|Number=Sing	0	root	_	Translit=galpaṭi|LTranslit=galpa
3	কি	কি	DET	_	PronType=Int	2	det	_	SpaceAfter=No|Translit=ki|LTranslit=ki
4	?	?	PUNCT	?	_	2	punct	_	Translit=?|LTranslit=?

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	তোমার	তুমি	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod:poss	_	LTranslit=tumi|Translit=tomāra
2	বন্ধু	বন্ধু	NOUN	_	Case=Nom|Number=Sing	0	root	_	Translit=bandhu|LTranslit=bandhu
3	কতজন	কত	ADJ	_	Degree=Pos	2	nmod	_	SpaceAfter=No|Translit=katajana|LTranslit=kata
4	?	?	PUNCT	?	_	2	punct	_	Translit=?|LTranslit=?

~~~


