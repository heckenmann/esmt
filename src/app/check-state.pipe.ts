import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkState'
})
export class CheckStatePipe implements PipeTransform {

  nodeStats: Map<string, StateCheck> = new Map<string, StateCheck>();

  constructor() {
    // Cluster Health
    this.nodeStats.set('status', new StateCheckStatus());
    this.nodeStats.set('snapshot_state', new SnapshotStateCheckStatus());
    this.nodeStats.set('timed_out', new StateCheckBoolean(false));
    this.nodeStats.set('relocating_shards', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('initializing_shards', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('unassigned_shards', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('delayed_unassigned_shards', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('number_of_pending_tasks', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('number_of_pending_tasks', new StateCheckNumber(true, 1000, 0));
    this.nodeStats.set('active_shards_percent_as_number', new StateCheckNumber(false, 5, 100));

    // Node stats
    this.nodeStats.set('using_compressed_ordinary_object_pointers', new StateCheckBoolean(false));

    // Index State
    this.nodeStats.set('state', new StateCheckIndexStatus());
  }

  transform(value: any, args?: string): string {
    if (this.nodeStats.has(args)) {
      return this.nodeStats.get(args).check(value);
    } else {
      return null;
    }
  }
}

export class State {
  static SUCCESS = 'SUCCESS';
  static ERROR = 'ERROR';
  static WARNING = 'WARNING';
  static DEFAULT = 'DEFAULT';
}

interface StateCheck {
  check(currentValue: any): string;
}

class StateCheckNumber implements StateCheck {
  constructor(private _lowerIsBetter: boolean, private _warningLimit: number, private _successLimit: number) { }

  check(currentValue: any): string {
    if (this._lowerIsBetter) {
      if (currentValue <= this._successLimit) return State.SUCCESS;
      else if (currentValue <= this._warningLimit) return State.WARNING;
      else return State.ERROR;
    } else {
      if (currentValue >= this._successLimit) return State.SUCCESS;
      else if (currentValue >= this._warningLimit) return State.WARNING;
      else return State.ERROR;
    }
  }
}

class StateCheckBoolean implements StateCheck {
  constructor(private _setpoint: boolean) { }

  check(currentValue: any): string {
    if (currentValue === this._setpoint) {
      return State.SUCCESS;
    } else {
      return State.ERROR;
    }
  }
}

class StateCheckStatus implements StateCheck {
  constructor() { }

  check(currentValue: any): string {
    if (currentValue === 'green') {
      return State.SUCCESS;
    } else if (currentValue === 'yellow') {
      return State.WARNING;
    } else {
      return State.ERROR;
    }
  }
}

class SnapshotStateCheckStatus implements StateCheck {
  constructor() { }

  check(currentValue: any): string {
    if (currentValue === 'SUCCESS') {
      return State.SUCCESS;
    } else if (currentValue === 'IN_PROGRESS') {
      return State.WARNING;
    }  else if (currentValue === 'INCOMPATIBLE') {
      return State.DEFAULT;
    } else {
      return State.ERROR;
    }
  }
}


class StateCheckIndexStatus implements StateCheck {
  constructor() { }

  check(currentValue: any): string {
    if (currentValue === 'open') {
      return State.SUCCESS;
    } else if (currentValue === 'close') {
      return State.DEFAULT;
    } else {
      return State.ERROR;
    }
  }
}
