---
layout: base
title:  'Statistics of compound:svc in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="th_tdt-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="th_tdt-dep-compound-redup.html">compound:redup</a></tt>.

212 nodes (4%) are attached to their parents as `compound:svc`.

212 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41981132075472.

The following 3 pairs of parts of speech are connected with `compound:svc`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (209; 99% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:svc	color:blue
1	พร้อม	พร้อม	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=ready|Translit=phrɔ́ːm
2	ใช้	ใช้	VERB	_	_	1	compound:svc	_	SpaceAfter=No|Gloss=use|Translit=cháj
3	เทคโนโลยี	เทคโนโลยี	NOUN	_	Foreign=Yes	2	obj	_	CorrectSpaceAfter=No|Gloss=technology|Translit=thék-noː-loː-jiː
4	ลุย	ลุย	VERB	_	_	1	advcl	_	SpaceAfter=No|Gloss=go through|Translit=luj
5	จัดการ	จัดการ	VERB	_	_	4	compound:svc	_	SpaceAfter=No|Gloss=manage|Translit=càt-kaːn
6	ปัญหา	ปัญหา	NOUN	_	_	5	obj	_	Gloss=problem|Translit=pan-hǎː

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:svc	color:blue
1	แต่	แต่	ADV	_	_	3	advmod	_	SpaceAfter=No|Gloss=but|Translit=
2	ตน	ตน	PRON	_	Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No|Gloss=I|Translit=
3	มา	มา	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=come|Translit=
4	เป็น	เป็น	AUX	_	_	5	cop	_	SpaceAfter=No|Gloss=be|Translit=
5	ตัว	ตัว	NOUN	_	_	3	compound:svc	_	SpaceAfter=No|Gloss=body|Translit=
6	แทน	แทน	VERB	_	_	5	acl	_	SpaceAfter=No|Gloss=|Translit=
7	ของ	ของ	ADP	_	_	8	case	_	SpaceAfter=No|Gloss=of|Translit=
8	พี่	พี่	NOUN	_	_	5	nmod	_	SpaceAfter=No|Gloss=|Translit=
9	ๆ	_	SYM	_	_	8	compound:redup	_	Gloss=|Translit=
10	น้อง	น้อง	NOUN	_	_	8	flat	_	SpaceAfter=No|Gloss=|Translit=
11	ๆ	_	SYM	_	_	10	compound:redup	_	Gloss=|Translit=
12	หลาย	หลาย	DET	_	PronType=Ind	8	det	_	SpaceAfter=No|Gloss=several|Translit=
13	คน	คน	NOUN	_	NounType=Clf	12	clf	_	Gloss=person|Translit=
14	เพื่อ	เพื่อ	ADP	_	_	15	mark	_	SpaceAfter=No|Gloss=for|Translit=
15	สะท้อน	สะท้อน	VERB	_	_	3	advcl	_	SpaceAfter=No|Gloss=|Translit=
16	ไป	ไป	VERB	_	_	15	compound:svc	_	SpaceAfter=No|Gloss=go|Translit=
17	ถึง	ถึง	ADP	_	_	18	case	_	SpaceAfter=No|Gloss=to|Translit=
18	ก.ตร.	ก.ตร.	NOUN	_	Abbr=Yes	16	obl	_	Gloss=|Translit=
19	ให้	ให้	VERB	_	_	15	advcl	_	SpaceAfter=No|Gloss=give|Translit=
20	พิจารณา	พิจารณา	VERB	_	_	19	compound:svc	_	SpaceAfter=No|Gloss=consider|Translit=
21	เป็นไป	เป็นไป	VERB	_	_	20	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
22	ตาม	ตาม	ADP	_	_	23	case	_	SpaceAfter=No|Gloss=following|Translit=
23	พ.ร.บ.	พ.ร.บ.	NOUN	_	Abbr=Yes	21	obl	_	SpaceAfter=No|Gloss=|Translit=
24	ตำรวจ	ตำรวจ	NOUN	_	_	23	nmod	_	Gloss=policeman|Translit=

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 compound:svc	color:blue
1	ส่วน	ส่วน	NOUN	_	_	6	dislocated	_	SpaceAfter=No|Gloss=part|Translit=sùan
2	มาตรการ	มาตรการ	NOUN	_	_	1	nmod	_	SpaceAfter=No|Gloss=measure|Translit=mâːt-trà-kaːn
3	ระยะ	ระยะ	NOUN	_	_	2	nmod	_	SpaceAfter=No|Gloss=range|Translit=ráʔ-jáʔ
4	ยาว	ยาว	VERB	_	_	3	acl	_	Gloss=long|Translit=jaːw
5	จะ	จะ	ADV	_	_	6	advmod	_	SpaceAfter=No|Gloss=will(express the future time)|Translit=càʔ
6	ต้อง	ต้อง	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=must|Translit=tɔ̂ŋ
7	ปรับ	ปรับ	VERB	_	_	6	xcomp	_	SpaceAfter=No|Gloss=adjust|Translit=pràp
8	เปลี่ยน	เปลี่ยน	VERB	_	_	7	conj	_	SpaceAfter=No|Gloss=change|Translit=plìan
9	รถ	รถ	NOUN	_	_	7	obj	_	SpaceAfter=No|Gloss=car|Translit=rót
10	สาธารณะ	สาธารณะ	VERB	_	_	9	acl	_	Gloss=public|Translit=sǎː-thaː-rá-náʔ
11	รถ	รถ	NOUN	_	_	9	conj	_	SpaceAfter=No|Gloss=car|Translit=rót
12	มอเตอร์ไซค์	มอเตอร์ไซค์	NOUN	_	Foreign=Yes	11	nmod	_	Gloss=motorcycle|Translit=mɔː-tɤː-saj
13	รวม	รวม	VERB	_	_	9	acl	_	SpaceAfter=No|Gloss=include|Translit=ruam
14	ถึง	ถึง	ADP	_	_	15	case	_	SpaceAfter=No|Gloss=to|Translit=thɯ̌ŋ
15	รถยนต์	รถยนต์	NOUN	_	_	13	obl	_	SpaceAfter=No|Gloss=car|Translit=rót-jon
16	ที่	ที่	PRON	_	PronType=Rel	17	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=thîː
17	มี	มี	VERB	_	_	9	acl:relcl	_	SpaceAfter=No|Gloss=have|Translit=miː
18	สภาพ	สภาพ	NOUN	_	_	17	obl:arg	_	SpaceAfter=No|Gloss=condition|Translit=sà-phâːp
19	เก่า	เก่า	VERB	_	_	18	acl	_	SpaceAfter=No|Gloss=old|Translit=kàw
20	ให้	ให้	VERB	_	_	7	advcl	_	SpaceAfter=No|Gloss=give|Translit=hâj
21	เป็น	เป็น	AUX	_	_	22	cop	_	Gloss=BE|Translit=pen
22	EV	_	PROPN	_	_	20	compound:svc	_	Gloss=electric vehicles|Translit=ʔiː-wiː
23	โดย	โดย	ADP	_	_	24	mark	_	SpaceAfter=No|Gloss=with|Translit=doːj
24	มี	มี	VERB	_	_	7	advcl	_	SpaceAfter=No|Gloss=have|Translit=miː
25	ภาค	ภาค	NOUN	_	_	24	nsubj	_	SpaceAfter=No|Gloss=sector|Translit=phâːk
26	รัฐ	รัฐ	NOUN	_	_	25	nmod	_	SpaceAfter=No|Gloss=government|Translit=rát
27	เป็น	เป็น	AUX	_	_	28	cop	_	SpaceAfter=No|Gloss=BE|Translit=pen
28	ผู้	ผู้	NOUN	_	_	25	acl	_	SpaceAfter=No|Gloss=person|Translit=phûː
29	สนับสนุน	สนับสนุน	VERB	_	_	28	acl	_	Gloss=support|Translit=sà-nàp-sà-nǔn

~~~


