---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` is used for finite and non-finite clauses that modify a noun. 

Note that in Irish, relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.
The super type `acl` is used for cases where the verb phrase is not present. 

### Examples

_Tugtar an caimbiam ar an <b>limistéar</b> fáis <b>díreach</b> faoin gcoirt._ `The <b>area</b> of growth <b>directly</b> underneath the bark is known as the cambium'

~~~ sdparse
Tugtar an caimbiam ar an limistéar fáis díreach faoin gcoirt. \n Is_given the cambium on the area of_growth direct under_the bark.
acl(limistéar, díreach)
~~~ 
<!-- Interlanguage links updated Út zář 29 20:23:14 CEST 2020 -->
