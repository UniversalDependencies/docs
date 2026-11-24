---
layout: base
title:  'Statistics of obj in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `obj`

This relation is universal.

415 nodes (7%) are attached to their parents as `obj`.

396 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (358; 86% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-PRON.html">PRON</a></tt> (24; 6% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt> (24; 6% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	พร้อม	พร้อม	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=ready|Translit=phrɔ́ːm
2	ใช้	ใช้	VERB	_	_	1	compound:svc	_	SpaceAfter=No|Gloss=use|Translit=cháj
3	เทคโนโลยี	เทคโนโลยี	NOUN	_	Foreign=Yes	2	obj	_	CorrectSpaceAfter=No|Gloss=technology|Translit=thék-noː-loː-jiː
4	ลุย	ลุย	VERB	_	_	1	advcl	_	SpaceAfter=No|Gloss=go through|Translit=luj
5	จัดการ	จัดการ	VERB	_	_	4	compound:svc	_	SpaceAfter=No|Gloss=manage|Translit=càt-kaːn
6	ปัญหา	ปัญหา	NOUN	_	_	5	obj	_	Gloss=problem|Translit=pan-hǎː

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	การ	การ	NOUN	_	NounType=Nmlz	7	nsubj	_	SpaceAfter=No|Gloss=|Translit=
2	ทำ	ทำ	VERB	_	_	1	acl	_	SpaceAfter=No|Gloss=do|Translit=
3	อะไร	อะไร	PRON	_	PronType=Ind	2	obj	_	SpaceAfter=No|Gloss=anything|Translit=
4	ใน	ใน	ADP	_	_	5	case	_	SpaceAfter=No|Gloss=in|Translit=
5	ขณะ	ขณะ	NOUN	_	_	1	nmod	_	SpaceAfter=No|Gloss=|Translit=
6	นั้น	นั้น	ADJ	_	_	5	amod	_	SpaceAfter=No|Gloss=that|Translit=
7	ทำ	ทำ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=do|Translit=
8	ได้	ได้	VERB	_	_	7	advcl	_	SpaceAfter=No|Gloss=|Translit=
9	ด้วย	ด้วย	ADP	_	_	10	case	_	SpaceAfter=No|Gloss=with|Translit=
10	ดุลยพินิจ	ดุลยพินิจ	NOUN	_	_	7	obl	_	SpaceAfter=No|Gloss=|Translit=
11	และ	และ	CCONJ	_	_	12	cc	_	SpaceAfter=No|Gloss=and|Translit=
12	ใช้	ใช้	VERB	_	_	7	conj	_	SpaceAfter=No|Gloss=use|Translit=
13	ระบบ	ระบบ	NOUN	_	_	12	obj	_	SpaceAfter=No|Gloss=system|Translit=
14	อุปถัมภ์	อุปถัมภ์	VERB	_	_	13	acl	_	Gloss=|Translit=

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	ไทย	ไทย	PROPN	_	_	2	nsubj	_	SpaceAfter=No|Gloss=Thai|Translit=thaj
2	สร้าง	สร้าง	VERB	_	ExtPos=PROPN	6	dislocated	_	SpaceAfter=No|Gloss=build|Translit=sâːŋ
3	ไทย	ไทย	PROPN	_	_	2	obj	_	SpaceAfter=No|Gloss=Thai|Translit=thaj
4	ดอนเมือง	ดอนเมือง	PROPN	_	_	2	nmod	_	Gloss=Don Mueang|Translit=dɔːn-mɯaŋ
5	“	“	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	พรึบ	พรึบ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=pack with|Translit=phrɯ̂p
7	”	”	PUNCT	_	_	6	punct	_	_
8	เวที	เวที	NOUN	_	_	6	obl:arg	_	SpaceAfter=No|Gloss=stage|Translit=weː-thiː
9	ปราศรัย	ปราศรัย	VERB	_	_	8	acl	_	SpaceAfter=No|Gloss=address|Translit=praː-sǎj
10	กว่า	กว่า	DET	_	PronType=Ind	11	det	_	Gloss=more-than|Translit=kwàː
11	3,000	3,000	NUM	_	_	6	nsubj	_	Gloss=3,000|Translit=sǎːm-phan
12	คน	คน	NOUN	_	NounType=Clf	11	clf	_	Gloss=person|Translit=khon

~~~


