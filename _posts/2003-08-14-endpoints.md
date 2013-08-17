---
layout: page
title: Endpoints
section: endpoints
---

Here's an example request of driving at night for a range of time with engine_speed, odometer and fuel_consumed_since_restart as csv:
{% highlight text %}http://vehicledatacloud-pl475c6m.dotcloud.com/?sourceID=5&startTime=1376012687.0299489&endTime=1376013305.805495&names=engine_speed,odometer,fuel_consumed_since_restart&format=delimited&apikey=[mykey]{% endhighlight %}

| Parameter     | Value(s)      | Required  | Notes |
|:-------------:|:-------------:|:-------------:| ----- |
| sourceID      | 1, 2, 3, 4, 5 | Yes       |  Each number represents a trace file. Drive descriptions are here     |
| names      | openXC keys<br>signals are here     |   No     |   Limits response to names provided. delimit multiple names with a comma   |
| limit | integer      |    No     |   limit the number of rows of data return  |
| format | delimited, json, jsonp      |   No     |   "callback" is the jsonp callback parameter. If not set, "?" is the callback function  |
| startTime | openXC timestamp (epoch)      |  No |   Works by itself or with endTime to create a range  |
| endTime | openXC timestamp (epoch)      |    No    | Works by itself or with startTime to create a range    |

### Parameter: sourceID

| sourceID values | Description | 
|:--------------:|--------------|
|1| Daytime drive from Ford World Headquarters to Comerica Park in Detroit |
|2| Daytime drive from Comerica Park in Detroit to Dearborn, MI | 
|3| Nighttime drive from Royal Oak, MI to Detroit and back | 
|4| Daytime drive from Ford World Headquarters to a park in Oakland county, MI |
|5| Daytime drive from a park in Oakland county, MI to Dearborn, MI |


### Parameter: names 

http://vehicledatacloud-pl475c6m.dotcloud.com/? 
Note: Not all signals available in these traces are documented. More info at the <a href="http://openxcplatform.com/vehicle-interface/output-format.html">OpenXC site</a>.

<dl>
    <dt>steering_wheel_angle</dt>
    <dd>
        -600 to +600 degrees
        <p><strong>Ford frequency:</strong> 6Hz (max 90Hz)</p>
    </dd>

    <dt>torque_at_transmission</dt>
    <dd>
        -500 to 1500 Nm
        <p><strong>Ford frequency:</strong> 60Hz</p>
    </dd>

    <dt>engine_speed<dt>
    <dd>
        0 to 16382 RPM
        <p><strong>Ford frequency:</strong> 4Hz (max 60Hz)</p>
    </dd>

    <dt>vehicle_speed</dt>
    <dd>0 to 655 km/h (this will be positive even if going in reverse as it's
        not a velocity, although you can use the gear status to figure out
        direction)

        <p><strong>Ford frequency:</strong> 4Hz (max 60Hz)</p>
    </dd>

    <dt>accelerator_pedal_position</dt>
    <dd>
       0 to 100%
        <p><strong>Ford frequency:</strong> 60Hz</p>
    </dd>

    <dt>parking_brake_status</dt>
    <dd>
        Boolean (true == brake engaged)
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>brake_pedal_status</dt>
    <dd>
        Boolean (True == pedal pressed)
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>transmission_gear_position</dt>
    <dd>
        States: first, second, third, fourth, fifth, sixth, seventh, eighth,
            reverse, neutral
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>odometer</dt>
    <dd>
        0 to 16777214.000 km, with about .2m resolution
        <p><strong>Ford frequency:</strong> 10Hz</p>
    </dd>

    <dt>ignition_status</dt>
    <dd>
        States: off, accessory, run, start
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>fuel_level</dt>
    <dd>
        0 - 100%
        <p><strong>Ford frequency:</strong> 48Hz</p>
    </dd>

    <dt>fuel_consumed_since_restart</dt>
    <dd>
        0 - 4294967295.0 L (this goes to 0 every time the vehicle restarts, like
        a trip meter)
        <p><strong>Ford frequency:</strong> 10Hz</p>
    </dd>

    <dt>door_status</dt>
    <dd>
        Value is State: driver, passenger, rear_left, rear_right.
        Event is Boolean: true == ajar
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>headlamp_status</dt>
    <dd>
        Boolean, true is on
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>high_beam_status</dt>
    <dd>
        Boolean, true is on
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>windshield_wiper_status</dt>
    <dd>
        Boolean, true is on
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>

    <dt>latitude</dt>
    <dd>
        -89.0 to 89.0 degrees with standard GPS accuracy
        <p><strong>Ford frequency:</strong> 1Hz</p>
    </dd>

    <dt>longitude</dt>
    <dd>
        -179.0 to 179.0 degrees with standard GPS accuracy
        <p><strong>Ford frequency:</strong> 1Hz</p>
    </dd>

    <dt>button_event</dt>
    <dd>
        Value is State: left, right, up, down, ok.<br/>
        Event is State: idle, pressed, released, held_short, held_long, stuck<br/>
        (The buttons this message refer to are highly dependent on the specific
        vehicle, but if it's supported, try the steering wheel buttons.)
        <p><strong>Ford frequency:</strong> Sent only if value changes</p>
    </dd>
</dl>
