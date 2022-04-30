---
layout: relation
title: 'compound:affix'
shortdef: 'construct state modification'
udver: '2'
---

The `compound:affix` subtype of the [compound]() relation is used for non-standalone yet
orthographically separated lemmas, largely originated as loan affixes (אנטי וירוס ‘antivirus’)
but not only (e.g. בלתי הפיך ‘irreversible’).

~~~ sdparse
הכל חדיש ו תלת - ממדי הרבה יותר . \n everything modern and three - dimensional much more .
compound:affix(ממדי, תלת)
punct(תלת, --5)
~~~

הכל חדיש ו תלת-ממדי הרבה יותר.

“Everything is much more modern and three-dimensional.”
<!-- Interlanguage links updated St lis 3 20:58:45 CET 2021 -->
