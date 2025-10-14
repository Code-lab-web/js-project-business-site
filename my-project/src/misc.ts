import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";

const findBareSupers = traverse.visitors.merge<NodePath<t.CallExpression>[]>([
    {
      Super(path: NodePath) {
        const { node, parentPath } = path;
        if (parentPath.isCallExpression({ callee: node })) {
          this.push(parentPath as NodePath<t.CallExpression>);
        }
      },
    },
  ]);